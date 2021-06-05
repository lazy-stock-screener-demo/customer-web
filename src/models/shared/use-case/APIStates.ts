import { State, IReadyState, IFetchState, IResultState } from "./State";
import { Handler } from "./Handler";

interface IReadyStateProps {
  handler: Handler;
  logicFunc: Function;
  actionCreatorFunc: Function;
  nextStateNewFunc: Function;
}

export class APIReadyState extends State implements IReadyState {
  public isExecute: boolean;
  public logicFunc: Function;
  public actionCreatorFunc: Function | undefined;
  public nextStateNewFunc: Function;
  constructor({
    handler,
    logicFunc,
    actionCreatorFunc,
    nextStateNewFunc,
  }: IReadyStateProps) {
    super(handler);
    this.logicFunc = logicFunc;
    this.actionCreatorFunc = actionCreatorFunc;
    this.nextStateNewFunc = nextStateNewFunc;
  }
  public isPass(): boolean {
    return this.logicFunc();
  }
  public async context(): Promise<any> {
    if (!this.isPass) return "error";
    if (this.handler.dispatch) {
      await this.handler.dispatch(this.actionCreatorFunc());
    }
  }
  public next(): boolean {
    this.handler.transitionTo(this.nextStateNewFunc(this.handler));
    return true;
  }
}

interface FetchStateProps {
  handler: Handler;
  apiService: any;
  nextSuccessState: Function;
  nextFailedState: Function;
}

export class APIFetchState extends State implements IFetchState {
  private eitherError: any;
  private apiService: any;
  private nextSuccessState: any;
  private nextFailedState: any;
  constructor({
    handler,
    apiService,
    nextSuccessState,
    nextFailedState,
  }: FetchStateProps) {
    super(handler);
    this.eitherError = "";
    this.apiService = apiService;
    this.nextSuccessState = nextSuccessState;
    this.nextFailedState = nextFailedState;
  }
  public async callAPI(): Promise<any> {
    this.eitherError = await this.apiService.fetchAPI();
    if (this.eitherError.isError()) {
      this.handler.error = this.eitherError.result.error;
    } else {
      this.handler.payload = this.eitherError.result.value;
    }
  }
  public async context(): Promise<any> {
    await this.callAPI();
  }
  public next(): boolean {
    if (this.eitherError.isError()) {
      this.handler.transitionTo(this.nextFailedState(this.handler));
    } else {
      this.handler.transitionTo(this.nextSuccessState(this.handler));
    }
    return true;
  }
}

interface SucessStateProps {
  handler: Handler;
  actionCreatorFunc: Function;
}

export class APISucessState extends State implements IResultState {
  public actionCreatorFunc: Function;
  constructor({ handler, actionCreatorFunc }: SucessStateProps) {
    super(handler);
    this.actionCreatorFunc = actionCreatorFunc;
  }
  public async context(): Promise<any> {
    if (this.handler.dispatch) {
      await this.handler.dispatch(this.actionCreatorFunc(this.handler.payload));
    }
  }
  public next(): boolean {
    return false;
  }
}

interface FailedStateProps {
  handler: Handler;
  actionCreatorFunc: Function;
}

export class APIFailedState extends State implements IResultState {
  public actionCreatorFunc: Function;
  constructor({ handler, actionCreatorFunc }: FailedStateProps) {
    super(handler);
    this.actionCreatorFunc = actionCreatorFunc;
  }
  public async context(): Promise<any> {
    if (this.handler.dispatch) {
      await this.handler.dispatch(this.actionCreatorFunc(this.handler.error));
    }
  }
  public next(): boolean {
    return false;
  }
}
