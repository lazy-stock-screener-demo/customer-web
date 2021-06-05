import { IHandlerProps, APIHandler } from "../../../shared/use-case/Handler";
import {
  APIReadyState,
  APIFetchState,
  APISucessState,
  APIFailedState,
} from "../../../shared/use-case/APIStates";
import * as actionCreators from "./signupActionCreators";
import { ISignupReqDTO } from "./signupDTO";
import { signupLogic } from "./signupLogic";
import { IdentityService } from "../../data-fetching/IdentityService";
import { AxiosStatic } from "axios";

function sucessState(handler) {
  return () =>
    new APISucessState({
      handler,
      actionCreatorFunc: actionCreators.signingupSuccess,
    });
}

function failedState(handler) {
  return () =>
    new APIFailedState({
      handler,
      actionCreatorFunc: actionCreators.signingupFailure,
    });
}

export const apiCall = async (api, reqDTO) => {
  const payload = {
    headers: {},
    params: {},
    data: { ...reqDTO },
  };
  const service = new IdentityService({
    api,
  });
  return await service.signup(payload);
};

function fetchState(handler, api: AxiosStatic, reqDTO: ISignupReqDTO) {
  return () =>
    new APIFetchState({
      handler,
      apiService: {
        fetchAPI: () => apiCall(api, reqDTO),
      },
      nextSuccessState: sucessState(handler),
      nextFailedState: failedState(handler),
    });
}

export const signup = (reqDTO: ISignupReqDTO) => {
  return async (
    dispatch: any,
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
        logicFunc: signupLogic,
        actionCreatorFunc: actionCreators.signingup,
        nextStateNewFunc: fetchState(handler, stockAPI, reqDTO),
      })
    );

    await handler.runNextCommand();
  };
};
