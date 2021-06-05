export const settingRouteConfig = {
  setting: { url: "/d/setting", name: "Setting" },
  profile: { url: "/d/setting/profile", name: "Profile" },
  notification: { url: "/d/setting/notification", name: "Notification" },
};

export const dashboardRouteConfig = {
  dashboard: {
    url: "/d",
    name: "dashboard",
  },
  search: {
    url: "/d/search",
    name: "Search",
  },
  catalog: {
    url: "/d/stock/:ticker",
    name: "Individual Stock",
  },
  analytic: {
    url: "/d/score/:ticker",
    name: "Analyze Stock",
  },
};

export const signInRouteConfig = {
  login: {
    url: "/login",
    name: "Sign In",
  },
};

export const pagePaths = {
  index: `/`,
  notfound: `/404`,
};
