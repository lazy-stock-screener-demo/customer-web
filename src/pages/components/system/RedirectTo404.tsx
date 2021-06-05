import React from "react";
import { Redirect } from "react-router-dom";

const RedirectToNotFound = () => <Redirect to="/404" />;

export default { component: RedirectToNotFound };
