import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { IRootState } from "../../models/shared/infra/reducerRoot";
import { readCatalogByTicker } from "../../models/stock-catalog/use-case/readCatalogByTicker/readCatalogByTickerUseCase";
import { IReadCatalogByTickerReqDTO } from "../../models/stock-catalog/use-case/readCatalogByTicker/readCatalogByTickerDTO";

export function useCatalogStateFacade() {
  const catalogGlobalState = useSelector(
    (state: IRootState) => state.catalogState
  );
  return { catalogGlobalState };
}

export function useCatalogAPIFacade() {
  const dispatch = useDispatch();
  const setReadCatalogByTicker = (reqDTO: IReadCatalogByTickerReqDTO) =>
    dispatch(readCatalogByTicker(reqDTO));

  return { setReadCatalogByTicker };
}

export function useCatalogAPIFacadeSSR(
  reqDTO: IReadCatalogByTickerReqDTO,
  dispatch
) {
  dispatch(readCatalogByTicker(reqDTO));
}
