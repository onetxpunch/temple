/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace GenericZap {
  export type ZapLiquidityRequestStruct = {
    firstSwapMinAmountOut: BigNumberish;
    useAltFunction: boolean;
    poolSwapMinAmountOut: BigNumberish;
    isOneSidedLiquidityAddition: boolean;
    otherToken: string;
    shouldTransferResidual: boolean;
    minLiquidityOut: BigNumberish;
    uniAmountAMin: BigNumberish;
    uniAmountBMin: BigNumberish;
    poolSwapData: BytesLike;
  };

  export type ZapLiquidityRequestStructOutput = [
    BigNumber,
    boolean,
    BigNumber,
    boolean,
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    firstSwapMinAmountOut: BigNumber;
    useAltFunction: boolean;
    poolSwapMinAmountOut: BigNumber;
    isOneSidedLiquidityAddition: boolean;
    otherToken: string;
    shouldTransferResidual: boolean;
    minLiquidityOut: BigNumber;
    uniAmountAMin: BigNumber;
    uniAmountBMin: BigNumber;
    poolSwapData: string;
  };
}

export declare namespace IBalancerVault {
  export type JoinPoolRequestStruct = {
    assets: string[];
    maxAmountsIn: BigNumberish[];
    userData: BytesLike;
    fromInternalBalance: boolean;
  };

  export type JoinPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
  ] & {
    assets: string[];
    maxAmountsIn: BigNumber[];
    userData: string;
    fromInternalBalance: boolean;
  };
}

export interface GenericZapInterface extends utils.Interface {
  contractName: "GenericZap";
  functions: {
    "addLiquidityGetMinAmounts(uint256,uint256,address)": FunctionFragment;
    "approvedTargets(address,address)": FunctionFragment;
    "getAmountToSwap(address,address,uint256)": FunctionFragment;
    "getSwapInAmount(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "recoverToken(address,address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovedTargets(address[],address[],bool[])": FunctionFragment;
    "toggleContractActive()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uniswapV2Router()": FunctionFragment;
    "zapIn(address,uint256,address,uint256,address,bytes)": FunctionFragment;
    "zapInFor(address,uint256,address,uint256,address,address,bytes)": FunctionFragment;
    "zapLiquidityBalancerPool(address,uint256,bytes32,address,bytes,(uint248,bool,uint248,bool,address,bool,uint256,uint256,uint256,bytes),(address[],uint256[],bytes,bool))": FunctionFragment;
    "zapLiquidityBalancerPoolFor(address,uint256,bytes32,address,address,bytes,(uint248,bool,uint248,bool,address,bool,uint256,uint256,uint256,bytes),(address[],uint256[],bytes,bool))": FunctionFragment;
    "zapLiquidityCurvePool(address,uint256,address,address,bytes,(uint248,bool,uint248,bool,address,bool,uint256,uint256,uint256,bytes))": FunctionFragment;
    "zapLiquidityCurvePoolFor(address,uint256,address,address,address,bytes,(uint248,bool,uint248,bool,address,bool,uint256,uint256,uint256,bytes))": FunctionFragment;
    "zapLiquidityUniV2(address,uint256,address,address,bytes,(uint248,bool,uint248,bool,address,bool,uint256,uint256,uint256,bytes))": FunctionFragment;
    "zapLiquidityUniV2For(address,uint256,address,address,address,bytes,(uint248,bool,uint248,bool,address,bool,uint256,uint256,uint256,bytes))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidityGetMinAmounts",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedTargets",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountToSwap",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapInAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedTargets",
    values: [string[], string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleContractActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Router",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "zapIn",
    values: [string, BigNumberish, string, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInFor",
    values: [
      string,
      BigNumberish,
      string,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapLiquidityBalancerPool",
    values: [
      string,
      BigNumberish,
      BytesLike,
      string,
      BytesLike,
      GenericZap.ZapLiquidityRequestStruct,
      IBalancerVault.JoinPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapLiquidityBalancerPoolFor",
    values: [
      string,
      BigNumberish,
      BytesLike,
      string,
      string,
      BytesLike,
      GenericZap.ZapLiquidityRequestStruct,
      IBalancerVault.JoinPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapLiquidityCurvePool",
    values: [
      string,
      BigNumberish,
      string,
      string,
      BytesLike,
      GenericZap.ZapLiquidityRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapLiquidityCurvePoolFor",
    values: [
      string,
      BigNumberish,
      string,
      string,
      string,
      BytesLike,
      GenericZap.ZapLiquidityRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapLiquidityUniV2",
    values: [
      string,
      BigNumberish,
      string,
      string,
      BytesLike,
      GenericZap.ZapLiquidityRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapLiquidityUniV2For",
    values: [
      string,
      BigNumberish,
      string,
      string,
      string,
      BytesLike,
      GenericZap.ZapLiquidityRequestStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidityGetMinAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountToSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapInAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleContractActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Router",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zapIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapInFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zapLiquidityBalancerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapLiquidityBalancerPoolFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapLiquidityCurvePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapLiquidityCurvePoolFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapLiquidityUniV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapLiquidityUniV2For",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetContractState(bool)": EventFragment;
    "TokenRecovered(address,address,uint256)": EventFragment;
    "ZappedIn(address,address,uint256,address,uint256)": EventFragment;
    "ZappedLPCurve(address,address,uint256,uint256[])": EventFragment;
    "ZappedLPUniV2(address,address,address,uint256,uint256)": EventFragment;
    "ZappedLiquidityBalancerPool(address,address,uint256,uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetContractState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZappedIn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZappedLPCurve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZappedLPUniV2"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ZappedLiquidityBalancerPool"
  ): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type SetContractStateEvent = TypedEvent<[boolean], { paused: boolean }>;

export type SetContractStateEventFilter =
  TypedEventFilter<SetContractStateEvent>;

export type TokenRecoveredEvent = TypedEvent<
  [string, string, BigNumber],
  { token: string; to: string; amount: BigNumber }
>;

export type TokenRecoveredEventFilter = TypedEventFilter<TokenRecoveredEvent>;

export type ZappedInEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  {
    sender: string;
    fromToken: string;
    fromAmount: BigNumber;
    toToken: string;
    amountOut: BigNumber;
  }
>;

export type ZappedInEventFilter = TypedEventFilter<ZappedInEvent>;

export type ZappedLPCurveEvent = TypedEvent<
  [string, string, BigNumber, BigNumber[]],
  {
    recipient: string;
    fromToken: string;
    liquidity: BigNumber;
    amounts: BigNumber[];
  }
>;

export type ZappedLPCurveEventFilter = TypedEventFilter<ZappedLPCurveEvent>;

export type ZappedLPUniV2Event = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    recipient: string;
    token0: string;
    token1: string;
    amountA: BigNumber;
    amountB: BigNumber;
  }
>;

export type ZappedLPUniV2EventFilter = TypedEventFilter<ZappedLPUniV2Event>;

export type ZappedLiquidityBalancerPoolEvent = TypedEvent<
  [string, string, BigNumber, BigNumber[]],
  {
    recipient: string;
    fromToken: string;
    fromAmount: BigNumber;
    maxAmountsIn: BigNumber[];
  }
>;

export type ZappedLiquidityBalancerPoolEventFilter =
  TypedEventFilter<ZappedLiquidityBalancerPoolEvent>;

export interface GenericZap extends BaseContract {
  contractName: "GenericZap";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GenericZapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidityGetMinAmounts(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSwapInAmount(
      _reserveIn: BigNumberish,
      _userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleContractActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV2Router(overrides?: CallOverrides): Promise<[string]>;

    zapIn(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _toToken: string,
      _amountOutMin: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInFor(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      recipient: string,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapLiquidityBalancerPool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapLiquidityBalancerPoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapLiquidityCurvePool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapLiquidityCurvePoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapLiquidityUniV2(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapLiquidityUniV2For(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidityGetMinAmounts(
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    pair: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
  >;

  approvedTargets(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAmountToSwap(
    _token: string,
    _pair: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSwapInAmount(
    _reserveIn: BigNumberish,
    _userIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  recoverToken(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedTargets(
    _tokens: string[],
    _targets: string[],
    _isApproved: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleContractActive(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV2Router(overrides?: CallOverrides): Promise<string>;

  zapIn(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _toToken: string,
    _amountOutMin: BigNumberish,
    _swapTarget: string,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInFor(
    fromToken: string,
    fromAmount: BigNumberish,
    toToken: string,
    amountOutMin: BigNumberish,
    recipient: string,
    swapTarget: string,
    swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapLiquidityBalancerPool(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _poolId: BytesLike,
    _swapTarget: string,
    _swapData: BytesLike,
    _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
    _request: IBalancerVault.JoinPoolRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapLiquidityBalancerPoolFor(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _poolId: BytesLike,
    _recipient: string,
    _swapTarget: string,
    _swapData: BytesLike,
    _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
    _request: IBalancerVault.JoinPoolRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapLiquidityCurvePool(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _pool: string,
    _swapTarget: string,
    _swapData: BytesLike,
    _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapLiquidityCurvePoolFor(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _pool: string,
    _recipient: string,
    _swapTarget: string,
    _swapData: BytesLike,
    _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapLiquidityUniV2(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _pair: string,
    _swapTarget: string,
    _swapData: BytesLike,
    _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapLiquidityUniV2For(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _pair: string,
    _for: string,
    _swapTarget: string,
    _swapData: BytesLike,
    _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidityGetMinAmounts(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapInAmount(
      _reserveIn: BigNumberish,
      _userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    toggleContractActive(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV2Router(overrides?: CallOverrides): Promise<string>;

    zapIn(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _toToken: string,
      _amountOutMin: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zapInFor(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      recipient: string,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zapLiquidityBalancerPool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    zapLiquidityBalancerPoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    zapLiquidityCurvePool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    zapLiquidityCurvePoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    zapLiquidityUniV2(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    zapLiquidityUniV2For(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SetContractState(bool)"(paused?: null): SetContractStateEventFilter;
    SetContractState(paused?: null): SetContractStateEventFilter;

    "TokenRecovered(address,address,uint256)"(
      token?: null,
      to?: null,
      amount?: null
    ): TokenRecoveredEventFilter;
    TokenRecovered(
      token?: null,
      to?: null,
      amount?: null
    ): TokenRecoveredEventFilter;

    "ZappedIn(address,address,uint256,address,uint256)"(
      sender?: string | null,
      fromToken?: null,
      fromAmount?: null,
      toToken?: null,
      amountOut?: null
    ): ZappedInEventFilter;
    ZappedIn(
      sender?: string | null,
      fromToken?: null,
      fromAmount?: null,
      toToken?: null,
      amountOut?: null
    ): ZappedInEventFilter;

    "ZappedLPCurve(address,address,uint256,uint256[])"(
      recipient?: string | null,
      fromToken?: null,
      liquidity?: null,
      amounts?: null
    ): ZappedLPCurveEventFilter;
    ZappedLPCurve(
      recipient?: string | null,
      fromToken?: null,
      liquidity?: null,
      amounts?: null
    ): ZappedLPCurveEventFilter;

    "ZappedLPUniV2(address,address,address,uint256,uint256)"(
      recipient?: string | null,
      token0?: null,
      token1?: null,
      amountA?: null,
      amountB?: null
    ): ZappedLPUniV2EventFilter;
    ZappedLPUniV2(
      recipient?: string | null,
      token0?: null,
      token1?: null,
      amountA?: null,
      amountB?: null
    ): ZappedLPUniV2EventFilter;

    "ZappedLiquidityBalancerPool(address,address,uint256,uint256[])"(
      recipient?: string | null,
      fromToken?: null,
      fromAmount?: null,
      maxAmountsIn?: null
    ): ZappedLiquidityBalancerPoolEventFilter;
    ZappedLiquidityBalancerPool(
      recipient?: string | null,
      fromToken?: null,
      fromAmount?: null,
      maxAmountsIn?: null
    ): ZappedLiquidityBalancerPoolEventFilter;
  };

  estimateGas: {
    addLiquidityGetMinAmounts(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapInAmount(
      _reserveIn: BigNumberish,
      _userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleContractActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV2Router(overrides?: CallOverrides): Promise<BigNumber>;

    zapIn(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _toToken: string,
      _amountOutMin: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInFor(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      recipient: string,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapLiquidityBalancerPool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapLiquidityBalancerPoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapLiquidityCurvePool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapLiquidityCurvePoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapLiquidityUniV2(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapLiquidityUniV2For(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityGetMinAmounts(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapInAmount(
      _reserveIn: BigNumberish,
      _userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleContractActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV2Router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zapIn(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _toToken: string,
      _amountOutMin: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInFor(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      recipient: string,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapLiquidityBalancerPool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapLiquidityBalancerPoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _poolId: BytesLike,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      _request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapLiquidityCurvePool(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapLiquidityCurvePoolFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pool: string,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapLiquidityUniV2(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapLiquidityUniV2For(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _pair: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      _zapLiqRequest: GenericZap.ZapLiquidityRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
