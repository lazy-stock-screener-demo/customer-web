import React, { memo } from "react";
import { WithIdentityCtx } from "../../../presenters/Customer/customerVM";
import { MainSettingSection, TimeSettingSection } from "./ProfileSectionBlocks";
import { Hr } from "../../../views/dump/FormSection";
import { matchRoutes } from "react-router-config";
import { dashboardRouteList } from "../../routes/index";
import { RouteConfig } from "react-router-config";
import { BreadCrumb, BreadCrumbItem } from "../../../views/dump/BreadCrumb";
import { Link } from "react-router-dom";

const ProfilePage = memo<RouteConfig>(({ route, location }) => {
  const matchedRoutes = matchRoutes(dashboardRouteList, location.pathname);
  console.log("matchedRoutes in Electronics", matchedRoutes);
  return (
    <>
      <BreadCrumb>
        {matchedRoutes.map((matchRoute, i) => {
          const {
            path,
            pars: { name },
          } = matchRoute.route;

          return (
            <BreadCrumbItem key={i}>
              <Link to={path}> {name} </Link>
            </BreadCrumbItem>
          );
        })}
      </BreadCrumb>
      <main>
        <form noValidate autoComplete="off">
          <Hr />
          <TimeSettingSection></TimeSettingSection>
          <Hr />
          <MainSettingSection></MainSettingSection>
        </form>
      </main>
    </>
  );
});

export default (routeProps) => WithIdentityCtx(routeProps)(ProfilePage)();
