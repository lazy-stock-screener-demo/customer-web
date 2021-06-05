import React, { ReactElement, memo, useEffect } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { DashboardLayout } from "../layouts/Dashboard/DashboardLayout";

const DashboardRoute = ({ route }: RouteConfigComponentProps): ReactElement => {
  console.log("Render DashboardRoute");
  console.log("route", route);
  /*
  {
    component: DashboardRoute
    routes:[{
      component:
      path: "/role-permission"
    }]
  }  
  */
  return <DashboardLayout>{renderRoutes(route.routes)}</DashboardLayout>;
};

export default DashboardRoute;
