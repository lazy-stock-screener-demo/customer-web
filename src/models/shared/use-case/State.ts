import { Handler } from "./Handler";

export class State implements IState {
  protected handler: Handler;
  constructor(handler: Handler) {
    this.handler = handler;
  }
  public context(): void {}
  next(): boolean {
    return true;
  }
}

export interface IState {
  context(): void;
  next(): boolean;
}

export interface IReadyState extends IState {
  isPass(logic: any): boolean;
}

export interface IFetchState extends IState {
  callAPI<T>(): Promise<T> | undefined;
}

export interface IResultState extends IState {}
