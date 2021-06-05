import {
  SIGNING_IN,
  SIGNING_IN_SUCCESS,
  SIGNING_IN_FAILURE,
} from "../use-case/signin/signinActionNames";
import {
  READING_ME,
  READING_ME_SUCCESS,
  READING_ME_FAILURE,
} from "../use-case/readMe/readMeActionNames";
import {
  SIGNING_UP,
  SIGNING_UP_SUCCESS,
  SIGNING_UP_FAILURE,
} from "../use-case/signup/signupActionNames";
import { ICustomerState } from "./state-models/ICustomerState";
import { authService } from "../../shared/services";
import { ICustomerAction } from "../use-case/ICustomerAction";

const initCustomerState: ICustomerState = {
  customer: {},
  isAuthenticated: false,

  isSigningIn: false,
  isSigningInSuccess: false,
  isSigningInFailure: false,

  isReadingMe: false,
  isReadingMeSuccess: false,
  isReadingMeFailure: false,

  isSigningUp: false,
  isSigningUpSuccess: false,
  isSigningUpFailure: false,

  error: "",
};

export const customerReducer = (
  state: ICustomerState = initCustomerState,
  action: ICustomerAction
): ICustomerState => {
  switch (action.type) {
    case SIGNING_IN:
      return {
        ...state,
        isSigningIn: true,
      };
    case SIGNING_IN_SUCCESS:
      authService.setToken("access-token", action.data.identity.accessToken);
      authService.setToken("refresh-token", action.data.identity.refreshToken);
      return {
        ...state,
        isSigningIn: false,
        isSigningInSuccess: true,
        isAuthenticated: true,
      };
    case SIGNING_IN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        isAuthenticated: false,
        isSigningInFailure: true,
        error: action.error,
      };
    case READING_ME:
      return {
        ...state,
        isReadingMe: false, // set false to prevent re-render when login
      };
    case READING_ME_SUCCESS:
      return {
        ...state,
        customer: action.data.customer,
        isReadingMe: false,
        isReadingMeSuccess: true,
        isAuthenticated: true,
      };
    case READING_ME_FAILURE:
      return {
        ...state,
        isReadingMe: false,
        isReadingMeFailure: true,
        error: action.error,
      };
    case SIGNING_UP:
      return {
        ...state,
        isSigningUp: true,
      };
    case SIGNING_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSigningUpSuccess: true,
      };
    case SIGNING_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        isSigningUpFailure: true,
      };
    default:
      return state;
  }
};
