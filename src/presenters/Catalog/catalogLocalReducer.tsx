import { IModalStatus } from "./catalogLocalDTO";

interface FactorContent {
  active: boolean;
  name: string;
}

export interface IInitLocalState<T> {
  modalStatus: IModalStatus;
  trackingFactor: {
    [key: string]: FactorContent;
  };
}

export const initLocalState: IInitLocalState<any> = {
  modalStatus: {
    isModalOpen: false,
    typeOfDialogue: "",
  },
  trackingFactor: {},
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
      case "EDIT_TRACKING_FACTOR": {
        return {
          ...state,
          trackingFactor: action.payload,
        };
      }
      default:
        return state;
    }
  };
  return reducer;
};
