import {
  ISignupActionType,
  SIGNING_UP,
  SIGNING_UP_SUCCESS,
  SIGNING_UP_FAILURE,
} from "./signupActionNames";
import { ISignupResDTO } from "./signupDTO";

export interface ISignupAction {
  type: ISignupActionType;
  data?: ISignupResDTO;
  error?: string;
}

export function signingup(): ISignupAction {
  return {
    type: SIGNING_UP,
  };
}
export function signingupSuccess(data: ISignupResDTO): ISignupAction {
  return {
    type: SIGNING_UP_SUCCESS,
    data,
  };
}
export function signingupFailure(error: string): ISignupAction {
  return {
    type: SIGNING_UP_FAILURE,
    error,
  };
}
