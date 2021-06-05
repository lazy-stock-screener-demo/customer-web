import { Dispatch } from "redux";
import { IIdentityLocalDTO, IModalStatus } from "./customerLocalDTO";

export interface IInitLocalState<T> {
  loadingPromise: Promise<T> | undefined;
  modalStatus: IModalStatus;
  error: boolean;
  roleLocalDTO: IIdentityLocalDTO | {};
  dispatch: Dispatch;
}

export const initLocalState: IInitLocalState<any> = {
  loadingPromise: undefined,
  modalStatus: {
    isModalOpen: false,
    typeOfDialogue: "",
  },
  error: undefined,
  roleLocalDTO: {},
  dispatch: undefined,
};

export default () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SWITCHING_MODAL": {
        return {
          ...state,
          modalStatus: action.payload,
        };
      }
      case "EDITING_LOCAL_ROLE": {
        const newLocalRole = action.payload;
        const roleLocalDTO = { ...state.roleLocalDTO, ...newLocalRole };
        return {
          ...state,
          roleLocalDTO,
        };
      }
      default:
        return state;
    }
  };
  return reducer;
};
