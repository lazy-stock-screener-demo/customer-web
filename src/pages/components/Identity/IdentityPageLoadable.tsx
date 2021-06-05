import loadable from "@loadable/component";

const LoadableComponent = loadable(
  () => import(/* webpackChunkName: "identity" */ "./IdentityPage")
);

// const SSRLoadData = ({ dispatch }: { dispatch: any }) =>
//   dispatch(getCurrentUser());

const SSRLoadData = () => {};

export default {
  component: LoadableComponent,
  SSRLoadData,
};
