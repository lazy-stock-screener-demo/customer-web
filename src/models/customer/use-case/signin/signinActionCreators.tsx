import {
  SIGNING_IN,
  ILoginActionType,
  SIGNING_IN_SUCCESS,
  SIGNING_IN_FAILURE,
  INIT_AUTH_SUCCESS,
  INIT_AUTH_FAILED,
} from "./signinActionNames";
import { ISigninResDTO } from "./signinDTO";

export interface ISigninMeAction {
  type: ILoginActionType;
  data?: ISigninResDTO;
  error?: string;
}

export function signingIn(): ISigninMeAction {
  return {
    type: SIGNING_IN,
  };
}
export function signingInSuccess(data: ISigninResDTO): ISigninMeAction {
  return {
    type: SIGNING_IN_SUCCESS,
    data,
  };
}
export function signingInFailure(error: string): ISigninMeAction {
  return {
    type: SIGNING_IN_FAILURE,
    error,
  };
}

// export function initAuth(): ILoginAction {
//   return {
//     type: INIT_AUTH_SUCCESS,
//   };
// }
// export function reloadAuth(): ILoginAction {
//   return {
//     type: INIT_AUTH_FAILED,
//   };
// }
