import { State, IState } from "./State";

export interface IHandlerProps {
  dispatch: any;
  getState: any;
}

export class Handler {
  protected state: IState;
  public dispatch: any;
  public getState: any;
  public error: any;
  public payload: any;
  constructor({ dispatch, getState }: IHandlerProps) {
    this.state = new State(this);
    this.dispatch = dispatch;
    this.getState = getState;
  }
  public transitionTo(state: IState): void {
    this.state = state;
  }

  public async runNextCommand(): Promise<any> {
    do {
      await this.state.context();
    } while (this.state.next());
  }
}

export class APIHandler extends Handler {
  constructor(handlerProps: IHandlerProps) {
    super(handlerProps);
  }
}
