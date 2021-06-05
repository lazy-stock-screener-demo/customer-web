import { customerReducer } from "../../customer/state-management/customerReducers";
import { ICustomerState } from "../../customer/state-management/state-models/ICustomerState";
import { catalogReducer } from "../../stock-catalog/state-management/catalogReducers";
import { ICatalogState } from "../../stock-catalog/state-management/state-models/ICatalogState";
import { client } from "./apolloClient";

export interface IRootState {
  customerState: ICustomerState;
  catalogState: ICatalogState;
}

export const composedReducers = (state: any = {}, action: any) => {
  return {
    customerState: customerReducer(state.customerState, action),
    catalogState: catalogReducer(state.catalogState, action),
    // apollo: client.reducer(),
  };
};
