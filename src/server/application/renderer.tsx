import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { ChunkExtractor } from "@loadable/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { apiData } from "./store";
import { AppRouteRootList } from "../../pages/routes";

const serverInitRenderer = (req: any, store: any, context: any) => {
  const helmet = Helmet.renderStatic();
  const webStats = path.resolve("./build-static/loadable-stats.json");
  const webExtractor = new ChunkExtractor({
    statsFile: webStats,
    entrypoints: ["index"],
  });
  const sheet = new ServerStyleSheet();
  const jsx = webExtractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <StyleSheetManager sheet={sheet.instance}>
          <div>{renderRoutes(AppRouteRootList)}</div>
        </StyleSheetManager>
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(jsx);
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        ${sheet.getStyleTags()}        
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(
          store.getState()
        )};window.appEnv = ${serialize(apiData)}</script>
        ${webExtractor.getScriptTags()}
      </body>
    </html>  
  `;
};

export { serverInitRenderer };
