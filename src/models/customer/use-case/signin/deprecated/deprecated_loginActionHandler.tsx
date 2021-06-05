import { LoginReadyState } from "../deprecated_loginActionState";
import { Handler } from "../../../../shared/use-case/Handler";

export class LoginHandler extends Handler {
  constructor({
    dispatch,
    getState,
    api,
    payload,
  }: {
    dispatch: any;
    getState: any;
    api: any;
    payload: any;
  }) {
    super({ dispatch, getState, api, payload });
    this.transitionTo(new LoginReadyState(this));
  }
}
