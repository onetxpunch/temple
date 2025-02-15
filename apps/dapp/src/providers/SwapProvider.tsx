import { useState, useContext, createContext, PropsWithChildren } from 'react';
import { BigNumber, Signer } from 'ethers';

import { useWallet } from 'providers/WalletProvider';
import { useNotification } from 'providers/NotificationProvider';
import { SwapService } from 'providers/types';
import { NoWalletAddressError } from 'providers/errors';
import { TICKER_SYMBOL } from 'enums/ticker-symbol';
import { formatNumberFixedDecimals } from 'utils/formatter';
import { asyncNoop } from 'utils/helpers';
import { fromAtto, ZERO } from 'utils/bigNumber';

import {
  ERC20__factory,
  TempleERC20Token__factory,
  TempleStableAMMRouter__factory,
  TempleUniswapV2Pair__factory,
  TreasuryIV__factory,
} from 'types/typechain';
import env from 'constants/env';
import { AnalyticsEvent } from 'constants/events';
import { AnalyticsService } from 'services/AnalyticsService';
import { formatBigNumber } from 'components/Vault/utils';

const INITIAL_STATE: SwapService = {
  templePrice: 0,
  iv: 0,
  buy: asyncNoop,
  sell: asyncNoop,
  getSellQuote: asyncNoop,
  getBuyQuote: asyncNoop,
  updateTemplePrice: asyncNoop,
  updateIv: asyncNoop,
  error: null,
};

const SwapContext = createContext(INITIAL_STATE);

export const SwapProvider = (props: PropsWithChildren<{}>) => {
  const [templePrice, setTemplePrice] = useState(INITIAL_STATE.templePrice);
  const [iv, setIv] = useState(INITIAL_STATE.iv);
  const [error, setError] = useState<Error | null>(null);

  const { wallet, signer, ensureAllowance } = useWallet();
  const { openNotification } = useNotification();

  const getTemplePrice = async (walletAddress: string, signerState: Signer, pairAddress: string) => {
    if (!walletAddress) {
      throw new NoWalletAddressError();
    }

    const pairContract = new TempleUniswapV2Pair__factory(signerState).attach(env.contracts.templeV2FraxPair);

    const { _reserve0, _reserve1 } = await pairContract.getReserves();

    return fromAtto(_reserve1) / fromAtto(_reserve0);
  };

  const updateTemplePrice = async (token: TICKER_SYMBOL.FRAX | TICKER_SYMBOL.FEI = TICKER_SYMBOL.FRAX) => {
    if (!wallet || !signer) {
      setError({
        name: 'Missing wallet or signer',
        message: "Couldn't update temple price - unable to get wallet or signer",
      });
      return;
    }

    setError(null);

    const pair = token === TICKER_SYMBOL.FEI ? env.contracts.templeV2FeiPair : env.contracts.templeV2FraxPair;
    const price = await getTemplePrice(wallet, signer, pair);
    setTemplePrice(price);
  };

  const getIv = async (walletAddress: string, signerState: Signer) => {
    if (!walletAddress) {
      throw new NoWalletAddressError();
    }

    const templeTreasury = new TreasuryIV__factory(signerState).attach(env.contracts.treasuryIv);

    const { frax, temple } = await templeTreasury.intrinsicValueRatio();
    return fromAtto(frax) / fromAtto(temple);
  };

  const updateIv = async () => {
    if (!wallet || !signer) {
      return;
    }

    const iv = await getIv(wallet, signer);
    setIv(iv);
  };

  const buy = async (
    amountIn: BigNumber,
    minAmountOutTemple: BigNumber,
    token: TICKER_SYMBOL.FRAX | TICKER_SYMBOL.FEI = TICKER_SYMBOL.FRAX,
    deadlineInMinutes = 20
  ) => {
    if (!wallet || !signer) {
      console.error("Couldn't find wallet or signer");
      setError({
        name: 'Missing wallet or signer',
        message: "Couldn't fetch buy quote - unable to get wallet or signer",
      });
      return;
    }

    setError(null);

    const tokenAddress = token === TICKER_SYMBOL.FEI ? env.contracts.fei : env.contracts.frax;
    const ammRouter = new TempleStableAMMRouter__factory(signer).attach(env.contracts.templeV2Router);
    const tokenContract = new ERC20__factory(signer).attach(tokenAddress);

    const balance = await tokenContract.balanceOf(wallet);
    const verifiedAmountIn = amountIn.lt(balance) ? amountIn : balance;

    const deadlineInSeconds = deadlineInMinutes * 60;
    const deadline = formatNumberFixedDecimals(Date.now() / 1000 + deadlineInSeconds, 0);

    await ensureAllowance(token, tokenContract, env.contracts.templeV2Router, amountIn);

    try {
      const buyTXN = await ammRouter.swapExactStableForTemple(
        verifiedAmountIn,
        minAmountOutTemple,
        tokenAddress,
        wallet,
        deadline,
        {
          gasLimit: env.gas?.swapFraxForTemple || 300000,
        }
      );
      const txReceipt = await buyTXN.wait();

      AnalyticsService.captureEvent(AnalyticsEvent.Trade.Buy, { token, amount: formatBigNumber(verifiedAmountIn) });

      // Show feedback to user
      openNotification({
        title: `Sacrificed ${token}`,
        hash: buyTXN.hash,
      });

      return txReceipt;
    } catch (e) {
      // 4001 is user manually cancelling transaction,
      // so we don't want to return it as an error
      if ((e as any).code !== 4001) {
        console.error("Couldn't complete buy transaction", e);
        setError(e as Error);
      }
      return;
    }
  };

  /**
   * AMM Sell
   * @param amountInTemple: Amount of $TEMPLE user wants to sell
   * @param minAmountOutFrax: % user is giving as slippage
   * @param isIvSwap: should sale be directed to TempleIvSwap contract
   */
  const sell = async (
    amountInTemple: BigNumber,
    minAmountOut: BigNumber,
    token: TICKER_SYMBOL.FRAX | TICKER_SYMBOL.FEI = TICKER_SYMBOL.FRAX,
    isIvSwap = false,
    deadlineInMinutes = 20
  ) => {
    if (!wallet || !signer) {
      console.error("Couldn't find wallet or signer");
      setError({
        name: 'Missing wallet or signer',
        message: "Couldn't complete sell transaction - unable to get wallet or signer",
      });
      return;
    }

    setError(null);

    let tokenAddress = token === TICKER_SYMBOL.FEI ? env.contracts.fei : env.contracts.frax;
    const ammRouter = new TempleStableAMMRouter__factory(signer).attach(env.contracts.templeV2Router);
    const templeContract = new TempleERC20Token__factory(signer).attach(env.contracts.temple);

    if (isIvSwap) {
      tokenAddress = env.contracts.fei;
    }

    const deadlineInSeconds = deadlineInMinutes * 60;

    await ensureAllowance(TICKER_SYMBOL.TEMPLE_TOKEN, templeContract, env.contracts.templeV2Router, amountInTemple);

    const balance = await templeContract.balanceOf(wallet);
    const verifiedAmountInTemple = amountInTemple.lt(balance) ? amountInTemple : balance;

    const deadline = formatNumberFixedDecimals(Date.now() / 1000 + deadlineInSeconds, 0);

    try {
      const sellTx = await ammRouter.swapExactTempleForStable(
        verifiedAmountInTemple,
        minAmountOut,
        tokenAddress,
        wallet,
        deadline,
        {
          gasLimit: env.gas?.swapTempleForFrax || 195000,
        }
      );

      const txReceipt = await sellTx.wait();

      AnalyticsService.captureEvent(AnalyticsEvent.Trade.Sell, {
        token,
        amount: formatBigNumber(verifiedAmountInTemple),
      });

      // Show feedback to user
      openNotification({
        title: `${TICKER_SYMBOL.TEMPLE_TOKEN} renounced`,
        hash: sellTx.hash,
      });

      return txReceipt;
    } catch (e) {
      // 4001 is user manually cancelling transaction,
      // so we don't want to return it as an error
      if ((e as any).code !== 4001) {
        console.error("Couldn't complete sell transaction", e);
        setError(e as Error);
      }
      return;
    }
  };

  const getBuyQuote = async (
    amountIn: BigNumber,
    token: TICKER_SYMBOL.FRAX | TICKER_SYMBOL.FEI = TICKER_SYMBOL.FRAX
  ): Promise<BigNumber> => {
    if (!wallet || !signer) {
      console.error("Couldn't find wallet or signer");

      setError({
        name: 'Missing wallet or signer',
        message: "Couldn't complete buy transaction - unable to get wallet or signer",
      });

      return ZERO;
    }

    setError(null);

    const AMM_ROUTER = new TempleStableAMMRouter__factory(signer).attach(env.contracts.templeV2Router);

    const pair = token === TICKER_SYMBOL.FEI ? env.contracts.templeV2FeiPair : env.contracts.templeV2FraxPair;

    const amountOut = await AMM_ROUTER.swapExactStableForTempleQuote(pair, amountIn);

    return amountOut;
  };

  const getSellQuote = async (
    amountToSell: BigNumber,
    token: TICKER_SYMBOL.FRAX | TICKER_SYMBOL.FEI = TICKER_SYMBOL.FRAX
  ) => {
    if (!wallet || !signer) {
      console.error("Couldn't find wallet or signer");
      setError({
        name: 'Missing wallet or signer',
        message: "Couldn't fetch sell quote - unable to get wallet or signer",
      });
      return {
        amountOut: BigNumber.from(0),
        priceBelowIV: false,
      };
    }

    setError(null);

    const AMM_ROUTER = new TempleStableAMMRouter__factory(signer).attach(env.contracts.templeV2Router);

    const pair = token === TICKER_SYMBOL.FEI ? env.contracts.templeV2FeiPair : env.contracts.templeV2FraxPair;

    const { amountOut, priceBelowIV } = await AMM_ROUTER.swapExactTempleForStableQuote(pair, amountToSell);

    return {
      amountOut: amountOut,
      priceBelowIV: priceBelowIV,
    };
  };

  return (
    <SwapContext.Provider
      value={{
        templePrice,
        iv,
        buy,
        sell,
        getBuyQuote,
        getSellQuote,
        updateTemplePrice,
        updateIv,
        error,
      }}
    >
      {props.children}
    </SwapContext.Provider>
  );
};

export const useSwap = () => useContext(SwapContext);
