import { IHandlerProps, APIHandler } from "../../../shared/use-case/Handler";
import {
  APIReadyState,
  APIFetchState,
  APISucessState,
  APIFailedState,
} from "../../../shared/use-case/APIStates";
import * as actionCreators from "./signinActionCreators";
import { Dispatch } from "redux";
import { AxiosStatic } from "axios";
import { ISigninReqDTO } from "./signinDTO";
import { signinLogic } from "./signinLogic";
import { IdentityService } from "../../data-fetching/IdentityService";

function sucessState(handler) {
  return () =>
    new APISucessState({
      handler,
      actionCreatorFunc: actionCreators.signingInSuccess,
    });
}

function failedState(handler) {
  return () =>
    new APIFailedState({
      handler,
      actionCreatorFunc: actionCreators.signingInFailure,
    });
}

function fetchState(handler, api: AxiosStatic, reqDTO: ISigninReqDTO) {
  return () =>
    new APIFetchState({
      handler,
      apiService: {
        fetchAPI: async () => {
          const payload = {
            headers: {},
            params: {},
            data: { ...reqDTO },
          };
          const service = new IdentityService({
            api,
          });
          return await service.signin(payload);
        },
      },
      nextSuccessState: sucessState(handler),
      nextFailedState: failedState(handler),
    });
}

export const signin = (reqDTO: ISigninReqDTO) => {
  return async (
    dispatch: Dispatch,
    getState: any,
    { stockAPI }: { stockAPI?: AxiosStatic }
  ) => {
    const handlerProps: IHandlerProps = {
      dispatch,
      getState,
    };
    const handler = new APIHandler(handlerProps);
    handler.transitionTo(
      new APIReadyState({
        handler,
        logicFunc: signinLogic,
        actionCreatorFunc: actionCreators.signingIn,
        nextStateNewFunc: fetchState(handler, stockAPI, reqDTO),
      })
    );

    await handler.runNextCommand();
  };
};
