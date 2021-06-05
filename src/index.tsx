import React, { useEffect } from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { isServer, encapsulatedStore } from "./models/shared/infra/reduxStore";
import { AppRouteRootList } from "./pages/routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./models/shared/infra/apolloClient";
import { loadableReady } from "@loadable/component";

const root = document.querySelector("#root");

const Application = (
  <Provider store={encapsulatedStore()}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <>{renderRoutes(AppRouteRootList)}</>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);

if (isServer) {
  loadableReady(() => {
    hydrate(Application, root);
  });
} else {
  render(Application, root);
}
