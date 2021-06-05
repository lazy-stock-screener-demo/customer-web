import loadable from "@loadable/component";

const LoadableComponent = loadable(
  () => import(/* webpackChunkName: "Catalog" */ "./CatalogPage")
);

export default LoadableComponent;
