import {
  IReadingCatalogActionType,
  READING_CATALOG,
  READING_CATALOG_SUCCESS,
  READING_CATALOG_FAILURE,
} from "../use-case/readCatalogByTicker/readCatalogByTickerActionNames";
import { ICatalogState } from "./state-models/ICatalogState";
import { ICatalogAction } from "../use-case/ICatalogAction";

const initCatalogState: ICatalogState = {
  catalog: {},
  catalogs: [],

  isReadingCatalog: false,
  isReadingCatalogSuccess: false,
  isReadingCatalogFailure: false,

  error: "",
};

export const catalogReducer = (
  state: ICatalogState = initCatalogState,
  action: ICatalogAction
): ICatalogState => {
  switch (action.type as IReadingCatalogActionType) {
    case READING_CATALOG:
      return {
        ...state,
        isReadingCatalog: true,
      };
    case READING_CATALOG_SUCCESS:
      return {
        ...state,
        catalog: action.data.catalog,
        isReadingCatalog: false,
        isReadingCatalogSuccess: true,
      };
    case READING_CATALOG_FAILURE:
      return {
        ...state,
        error: action.error,
        isReadingCatalog: false,
        isReadingCatalogFailure: true,
      };
    default:
      return state;
  }
};
