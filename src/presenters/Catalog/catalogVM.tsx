import React, {
  useReducer,
  createContext,
  ReactElement,
  useEffect,
} from "react";
import createLocalReducer from "./catalogLocalReducer";
import { LoadingOrChildren } from "../shared/loadingOrChildren";
import { Dispatch } from "redux";
import {
  useCatalogStateFacade,
  useCatalogAPIFacade,
  useCatalogAPIFacadeSSR,
} from "./catalogAPIFacade";
import { initLocalState, IInitLocalState } from "./catalogLocalReducer";
import { IReadCatalogByTickerReqDTO } from "../../models/stock-catalog/use-case/readCatalogByTicker/readCatalogByTickerDTO";

interface IContextProps extends IInitLocalState<any> {
  dispatch: Dispatch;
}

const localReducer = createLocalReducer();
export const Catalog = createContext({
  ...initLocalState,
  dispatch: () => {},
} as IContextProps);

// Page Level Context a.k.a. Page Level State Provider
export function WithCatalogLocalCtx({ ...props }): Function {
  return (PageContainer): Function => {
    return (): ReactElement => {
      const [localState, dispatch] = useReducer(localReducer, initLocalState);
      return (
        <Catalog.Provider value={{ ...localState, dispatch }}>
          <PageContainer {...props} />
        </Catalog.Provider>
      );
    };
  };
}

export function WithCatalogState({ ...props }): Function {
  return (UILogicContainer): Function => {
    return (): ReactElement => {
      const { catalogGlobalState } = useCatalogStateFacade();
      const { isReadingCatalog, error } = catalogGlobalState;
      return LoadingOrChildren({
        isLoading: isReadingCatalog,
        errMsg: error,
        children: () => (
          <UILogicContainer {...props} catalogState={catalogGlobalState} />
        ),
      });
    };
  };
}

export function WithCatalogAPIHandler({ ...props }): Function {
  return (UILogicContainer): Function => {
    return (): ReactElement => {
      // const ticker = props["match"]["params"]["ticker"];
      const { setReadCatalogByTicker } = useCatalogAPIFacade();

      function asyncReadCatalogByTicker(reqDTO: IReadCatalogByTickerReqDTO) {
        setReadCatalogByTicker(reqDTO);
      }

      return (
        <UILogicContainer
          {...props}
          asyncReadCatalogByTicker={asyncReadCatalogByTicker}
        ></UILogicContainer>
      );
    };
  };
}

export const useCatalog = ({ ticker }) => {
  const { setReadCatalogByTicker } = useCatalogAPIFacade();
  useEffect(() => {
    setReadCatalogByTicker({ stockVID: ticker });
  }, [ticker]);
};

export const useCatalogSSR = ({ ticker, dispatch }) => {
  useCatalogAPIFacadeSSR({ stockVID: ticker }, dispatch);
};
