import { IHandlerProps, APIHandler } from "../../../shared/use-case/Handler";
import {
  APIReadyState,
  APIFetchState,
  APISucessState,
  APIFailedState,
} from "../../../shared/use-case/APIStates";
import * as actionCreators from "./readMeActionCreators";
import { IReadMeReqDTO } from "./readMeDTO";
import { readMeLogic } from "./readMeLogic";
import { CustomerService } from "../../data-fetching/CustomerService";
import { AxiosStatic } from "axios";

function sucessState(handler) {
  return () =>
    new APISucessState({
      handler,
      actionCreatorFunc: actionCreators.readingMeSuccess,
    });
}

function failedState(handler) {
  return () =>
    new APIFailedState({
      handler,
      actionCreatorFunc: actionCreators.readingMeFailure,
    });
}

export const apiCall = async (api, reqDTO) => {
  const payload = {
    headers: {},
    params: { ...reqDTO },
    data: {},
  };
  const service = new CustomerService({
    api,
  });
  return await service.readMe(payload);
};

function fetchState(handler, api: AxiosStatic, reqDTO: IReadMeReqDTO) {
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

export const readMe = (reqDTO: IReadMeReqDTO) => {
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
        logicFunc: readMeLogic,
        actionCreatorFunc: actionCreators.readingMe,
        nextStateNewFunc: fetchState(handler, stockAPI, reqDTO),
      })
    );

    await handler.runNextCommand();
  };
};
