export type ILoginActionType =
  | "SIGNING_IN"
  | "SIGNING_IN_SUCCESS"
  | "SIGNING_IN_FAILURE";
export type IAuthActionType = "INIT_AUTH_SUCCESS" | "INIT_AUTH_FAILED";

export const SIGNING_IN: ILoginActionType = "SIGNING_IN";
export const SIGNING_IN_SUCCESS: ILoginActionType = "SIGNING_IN_SUCCESS";
export const SIGNING_IN_FAILURE: ILoginActionType = "SIGNING_IN_FAILURE";
export const INIT_AUTH_SUCCESS: IAuthActionType = "INIT_AUTH_SUCCESS";
export const INIT_AUTH_FAILED: IAuthActionType = "INIT_AUTH_FAILED";
