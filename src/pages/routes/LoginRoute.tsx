import React, { ReactElement, memo } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { LoginLayout } from "../layouts/Login/LoginLayout";

const LoginRoute = ({ route }: RouteConfigComponentProps): ReactElement => {
  return <LoginLayout>{renderRoutes(route.routes)}</LoginLayout>;
};

export default LoginRoute;
