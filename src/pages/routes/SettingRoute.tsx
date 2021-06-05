import React, { ReactElement, memo } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { SettingLayout } from "../layouts/Setting/SettingLayout";

// const SettingLayout = ({ children }): ReactElement => {
//   console.log("route", children);
//   return (
//     <>
//       <p>aaaa</p>
//       <div>{children}</div>
//     </>
//   );
// };

const SettingRoute = ({ route }: RouteConfigComponentProps): ReactElement => {
  /*
  {
    component: SettingRoute
    routes:[{
      component:
      path: "/role-permission"
    }]
  }  
  */

  return <SettingLayout>{renderRoutes(route.routes)}</SettingLayout>;
};

export default SettingRoute;
