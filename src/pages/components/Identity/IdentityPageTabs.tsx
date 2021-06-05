import React, { useState, useEffect } from "react";
import { SigninSecion, SignUpSecion } from "./IdentitySectionBlocks";
export const tabList = ["Signin", "Signup"];

export const SigninTab = () => {
  return (
    <>
      <SigninSecion />
    </>
  );
};
export const SignupTab = () => {
  return (
    <>
      <SignUpSecion />
    </>
  );
};

export const tabsBody = {
  Signin: SigninTab(),
  Signup: SignupTab(),
};
