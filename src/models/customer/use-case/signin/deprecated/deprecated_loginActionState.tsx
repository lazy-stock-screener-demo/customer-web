import { State } from "../../../shared/interaction/use-case/State";
import { AuthService } from "../../data-fetching/deprecated/AuthService";
import {
  IReadyState,
  IFetchState,
  IResultState,
} from "../../../shared/interaction/use-case/IState";
import { loginLogic } from "./loginLogic";
import { LoginHandler } from "./deprecated_loginActionHandler";
import * as actionCreators from "./loginActionCreators";

class LoginState extends State {
  constructor(handler: LoginHandler) {
    super(handler);
  }
}

class LoginReadyState extends LoginState implements IReadyState {
  public isPass(): boolean {
    return loginLogic();
  }
  public async context(): Promise<any> {
    if (!this.isPass()) return "error";
    await this.handler.dispatch(actionCreators.loggingIn());
  }
  public next(): boolean {
    this.handler.transitionTo(new LoginFetchState(this.handler));
    return true;
  }
}

class LoginFetchState extends LoginState implements IFetchState {
  private error: Error | string;
  private eitherError: any;
  constructor(handler: LoginHandler) {
    super(handler);
    this.error = "";
    this.eitherError = "";
  }
  public async callAPI(): Promise<any> {
    const authService = new AuthService({ api: this.handler.api });
    this.eitherError = await authService.login(this.handler.payload);
    if (this.eitherError.isError()) {
      this.error = this.eitherError.result.error;
    } else {
      this.handler.resPayload = this.eitherError.result.value;
    }
  }
  public async context(): Promise<any> {
    await this.callAPI();
  }
  public next(): boolean {
    if (this.eitherError.isError()) {
      this.handler.transitionTo(new LoginFailedState(this.handler, this.error));
    } else {
      this.handler.transitionTo(new LoginSucessState(this.handler));
    }
    return true;
  }
}

class LoginSucessState extends LoginState implements IResultState {
  constructor(handler: LoginHandler) {
    super(handler);
  }
  public async context(): Promise<any> {
    await this.handler.dispatch(
      actionCreators.loggingInSuccess(this.handler.resPayload)
    );
  }
  public next(): boolean {
    return false;
  }
}

class LoginFailedState extends LoginState implements IResultState {
  protected error: Error | string;
  constructor(handler: LoginHandler, error: Error | string) {
    super(handler);
    this.error = error;
  }
  public async context(): Promise<any> {
    await this.handler.dispatch(actionCreators.loggingInFailure(this.error));
  }
  public next(): boolean {
    return false;
  }
}

export { LoginReadyState, LoginFetchState, LoginSucessState, LoginFailedState };
