import React from "react";
import { Router } from "express";
import { matchRoutes } from "react-router-config";
import { AppRouteRootList } from "../../pages/routes";
import { serverInitRenderer } from "../application/renderer";
import { storeCreator } from "../application/store";

const staticFileRouter = Router();

staticFileRouter.get("*", (req, res) => {
  const store = storeCreator(req);
  const promises = matchRoutes(AppRouteRootList, req.path)
    .map(({ route, match }) => {
      return route.SSRLoadData
        ? route.SSRLoadData(store, {
            params: match["params"],
            url: match["url"],
          })
        : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context: { url?: string; notFound?: string } = {};
    const content = serverInitRenderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

export { staticFileRouter };
