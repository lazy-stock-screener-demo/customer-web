import loadable from "@loadable/component";
import { readCatalogByTicker } from "../../../models/stock-catalog/use-case/readCatalogByTicker/readCatalogByTickerUseCase";

const LoadableComponent = loadable(
  () => import(/* webpackChunkName: "Profile" */ "./ProfilePage")
);

// const SSRLoadData = ({ dispatch }: { dispatch: any }) =>
//   dispatch(readCatalogByTicker({ stockVID: "MSFT" }));

export default {
  component: LoadableComponent,
  // SSRLoadData,
};
