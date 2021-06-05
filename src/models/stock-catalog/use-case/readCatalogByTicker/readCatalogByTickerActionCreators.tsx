import {
  READING_CATALOG,
  READING_CATALOG_SUCCESS,
  READING_CATALOG_FAILURE,
} from "./readCatalogByTickerActionNames";
import { ICatalogAction } from "../ICatalogAction";
import { IReadCatalogByTickerResDTO } from "./readCatalogByTickerDTO";

export function readingCatalogByTicker(): ICatalogAction {
  return {
    type: READING_CATALOG,
  };
}
export function readingCatalogByTickerSuccess(
  data: IReadCatalogByTickerResDTO
): ICatalogAction {
  return {
    type: READING_CATALOG_SUCCESS,
    data,
  };
}
export function readingCatalogByTickerFailure(
  error: Error | string
): ICatalogAction {
  return {
    type: READING_CATALOG_FAILURE,
    error,
  };
}
