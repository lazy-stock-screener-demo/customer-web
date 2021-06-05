import React, { ReactElement, useEffect, memo } from "react";
import { Redirect } from "react-router-dom";
import { WithIdentityState } from "../../presenters/Customer/customerVM";
import { RouteConfig } from "react-router-config";
import { signInRouteConfig } from "./paths";

const RequiredAuthedRoute = memo<RouteConfig>(
  ({
    isAuthenticated,
    isReadingMeFailure,
    asyncReadMe,
    children,
    ...props
  }) => {
    console.log("Require Route");
    console.log("isAuthenticated", isAuthenticated);
    console.log("isReadingMeFailure", isReadingMeFailure);
    if (isAuthenticated == false && isReadingMeFailure == true) {
      return <Redirect to={signInRouteConfig.login.url} />;
      // return <></>;
    }
    return (
      <>{typeof children == "function" ? children({ ...props }) : children}</>
    );
  }
);

export default ({ ...props }) =>
  WithIdentityState({ ...props })(RequiredAuthedRoute)();
