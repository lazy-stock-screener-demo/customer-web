import {
  READING_SEARCH_AUTO_COMPLETE,
  READING_SEARCH_AUTO_COMPLETE_SUCCESS,
  READING_SEARCH_AUTO_COMPLETE_FAILURE,
} from "./readSearchAutoCompleteActionNames";
import { ICatalogAction } from "../ICatalogAction";
import { IReadSearchAutoCompleteResDTO } from "./readSearchAutoCompleteDTO";

export function readingCatalogByTicker(): ICatalogAction {
  return {
    type: READING_SEARCH_AUTO_COMPLETE,
  };
}
export function readingCatalogByTickerSuccess(
  data: IReadSearchAutoCompleteResDTO
): ICatalogAction {
  return {
    type: READING_SEARCH_AUTO_COMPLETE_SUCCESS,
    data,
  };
}
export function readingCatalogByTickerFailure(
  error: Error | string
): ICatalogAction {
  return {
    type: READING_SEARCH_AUTO_COMPLETE_FAILURE,
    error,
  };
}
