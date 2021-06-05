import React from "react";
import { Loading } from "../../views/dump/Loading";

export function LoadingOrChildren({ isLoading, errMsg, children }) {
  if (isLoading) {
    return <Loading active={isLoading} />;
  }
  if (errMsg) {
    return <>{JSON.stringify(errMsg)}</>;
  }
  return <>{typeof children == "function" ? children() : children}</>;
}
