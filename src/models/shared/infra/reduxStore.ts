import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composedReducers } from "./reducerRoot";
import { client } from "./apolloClient";
import axios from "axios";

// For universal ("isomorphic") apps, prefix it with typeof window !== 'undefined' &&
const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const encapsulatedStore = () => {
  let stockEnv = appEnv;
  // console.log("window.appEnv", window.appEnv);
  if (typeof window.appEnv !== "undefined") {
    stockEnv = window.appEnv;
  } else {
    stockEnv = appEnv;
  }

  const stockAPI = axios.create({
    baseURL: `${stockEnv.stock.host}:${stockEnv.stock.port}/${stockEnv.stock.version}/`,
  });
  // console.log(stockEnv.stock.host);
  console.log("client app env", appEnv.stock.host);
  // console.log("client window app env", window[appEnv]);
  const initialState = isServer
    ? (window as any).INITIAL_STATE
    : (window as any).__PRELOADED_STATE__;

  const isElectronEnhancer = function () {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(" electron/") > -1) {
      return [];
    }
    if (userAgent.indexOf(" chrome") > -1) {
      return [(window as any).__REDUX_DEVTOOLS_EXTENSION__()];
    }
    return [];
  };

  const enhancers: any = isServer ? [] : isElectronEnhancer();

  const middlewareList: any = [thunkMiddleware.withExtraArgument({ stockAPI })];

  const composedEnhancers = compose(
    applyMiddleware(...middlewareList),
    ...enhancers
  );

  const store: Store = createStore(
    composedReducers,
    initialState,
    composedEnhancers
  );
  return store;
};

export { isServer, encapsulatedStore };
