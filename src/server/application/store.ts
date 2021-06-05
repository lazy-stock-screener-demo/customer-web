require("dotenv").config();
import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composedReducers } from "../../models/shared/infra/reducerRoot";
import axios from "axios";

const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const apiData = {
  stock: {
    version: process.env.STOCK_PROD_VER,
    host: process.env.STOCK_PROD_HOST,
    port: process.env.STOCK_PROD_PORT,
  },
};
console.log("process.env.STOCK_PROD_HOST", process.env.STOCK_PROD_HOST);
const storeCreator = (req: any) => {
  const enhancers: any = [];
  const stockAPI = axios.create({
    baseURL: `${apiData.stock.host}:${apiData.stock.port}/${apiData.stock.version}/`,
    headers: { cookie: req.get("cookie") || "" },
  });
  const middlewareList = [thunkMiddleware.withExtraArgument({ stockAPI })];

  const composedEnhancers = compose(
    applyMiddleware(...middlewareList),
    ...enhancers
  );
  const store = createStore(composedReducers, {} as any, composedEnhancers);
  return store;
};

export { isServer, storeCreator, apiData };
