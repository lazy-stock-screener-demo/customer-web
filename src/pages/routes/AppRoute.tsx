import React, { ReactElement, FunctionComponent, useEffect, memo } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { AppLayout } from "../layouts/App/AppLayout";

const AppRoute = ({ route }: RouteConfigComponentProps): ReactElement => {
  return <AppLayout>{renderRoutes(route.routes)}</AppLayout>;
};

export default AppRoute;
