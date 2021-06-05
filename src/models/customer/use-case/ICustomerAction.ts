import { IReadMeAction } from "./readMe/readMeActionCreators";
import { ISigninMeAction } from "./signin/signinActionCreators";
import { ISignupAction } from "./signup/signupActionCreators";

export type ICustomerAction = IReadMeAction | ISigninMeAction | ISignupAction;

// export type IData = IReadMeResDTO | ISigninResDTO | IUpdatePWDResDTO;
// type IError = Error | string;

// type IDataMap = {
//   "1": IReadMeResDTO;
//   "2": ISigninResDTO;
//   "3": IUpdatePWDResDTO;
// };

// type Action<O extends keyof IDataMap> = {
//   type: ICustomerActionType;
//   data?: IDataMap[O];
//   error?: IError;
// };

// type TGenericOfUnion<U extends keyof IDataMap> = { [K in U]: Action<K> }[U];

// export type ActionItem = TGenericOfUnion<keyof IDataMap>;

// export type ICustomerActionType =
//   | IUpdatePwdActionType
//   | IReadMeActionType
//   | ILoginActionType
//   | IAuthActionType;

// {
//   type: ICustomerActionType;
//   data: IData;
//   error: IError;
// };
