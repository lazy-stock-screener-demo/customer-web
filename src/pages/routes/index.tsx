import React, { memo, ReactElement, useEffect } from "react";
import { useParams } from "react-router";
import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import AppRoute from "./AppRoute";
import DashboardRoute from "./DashboardRoute";
import AuthedRoute from "../../pages/routes/RequireAuthedRoute";
import RedirectIfAuthedRoute from "../../pages/routes/RedirectAuthedRoute";
import SettingRoute from "../routes/SettingRoute";
import LoginRoute from "../routes/LoginRoute";
import { useCatalog, useCatalogSSR } from "../../presenters/Catalog/catalogVM";
import { useAuth } from "../../presenters/Customer/customerVM";
import LoginPage from "../components/Identity/IdentityPageLoadable";
import HomePage from "../components/Home/HomePageContainer";
import NotFoundPage from "../components/system/404";
import RedirectToNotFoundPage from "../components/system/RedirectTo404";
import NotificationPage from "../components/Notification/NotificationPageLoadable";
import ProfilePage from "../components/Profile/ProfilePageLoadable";
import CatalogPage from "../components/Catalog/CatalogPageLoadable";
import AnalyticPage from "../components/Analytic/AnalyticPageLoadable";
import {
  settingRouteConfig,
  dashboardRouteConfig,
  pagePaths,
  signInRouteConfig,
} from "./paths";

export interface IPageProps {
  authType: string;
  component: ReactElement;
  path: string;
  routes?: IPageProps[];
}

export const settingRouteList: RouteConfig[] = [
  {
    ...ProfilePage,
    path: settingRouteConfig.profile.url,
    pars: settingRouteConfig.profile,
  },
  {
    ...NotificationPage,
    path: settingRouteConfig.notification.url,
    pars: settingRouteConfig.notification,
  },
];

export const dashboardRouteList: RouteConfig[] = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => {
      const { ticker } = useParams<any>();
      useCatalog({ ticker });
      return <CatalogPage {...props} />;
    },
    SSRLoadData: ({ dispatch }, { params }) => {
      // For server-side render, this function run before any app load.
      const { ticker } = params;
      useCatalogSSR({ ticker, dispatch });
    },
    path: dashboardRouteConfig.catalog.url,
    pars: dashboardRouteConfig.catalog,
  },
  {
    ...AnalyticPage,
    path: dashboardRouteConfig.analytic.url,
    pars: dashboardRouteConfig.analytic,
  },
  {
    component: SettingRoute,
    routes: settingRouteList,
    path: settingRouteConfig.setting.url,
    pars: settingRouteConfig.setting,
  },
];

export const loginRouteList = [
  {
    ...LoginPage,
    path: signInRouteConfig.login.url,
    pars: signInRouteConfig.login,
  },
];

export const appRouteList = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => (
      <AuthedRoute>
        <DashboardRoute {...props} />
      </AuthedRoute>
    ),
    routes: dashboardRouteList,
    path: dashboardRouteConfig.dashboard.url,
  },
  {
    component: ({ ...props }: RouteConfigComponentProps) => (
      <RedirectIfAuthedRoute>
        <LoginRoute {...props} />
      </RedirectIfAuthedRoute>
    ),
    routes: loginRouteList,
    path: signInRouteConfig.login.url,
  },
  { ...HomePage, path: pagePaths.index, exact: true },
  { ...NotFoundPage, path: pagePaths.notfound },
  { ...RedirectToNotFoundPage },
];

export const AppRouteRootList: RouteConfig[] = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => {
      useAuth();
      return <AppRoute {...props} />;
    },
    routes: appRouteList as RouteConfig[],
  },
];
