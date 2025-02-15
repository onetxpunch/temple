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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IGenericZapsInterface extends utils.Interface {
  contractName: "IGenericZaps";
  functions: {
    "getSwapInAmount(uint256,uint256)": FunctionFragment;
    "zapIn(address,uint256,address,uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSwapInAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zapIn",
    values: [string, BigNumberish, string, BigNumberish, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSwapInAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zapIn", data: BytesLike): Result;

  events: {};
}

export interface IGenericZaps extends BaseContract {
  contractName: "IGenericZaps";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGenericZapsInterface;

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
    getSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    zapIn(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getSwapInAmount(
    reserveIn: BigNumberish,
    userIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  zapIn(
    fromToken: string,
    fromAmount: BigNumberish,
    toToken: string,
    amountOutMin: BigNumberish,
    swapTarget: string,
    swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zapIn(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zapIn(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    zapIn(
      fromToken: string,
      fromAmount: BigNumberish,
      toToken: string,
      amountOutMin: BigNumberish,
      swapTarget: string,
      swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
