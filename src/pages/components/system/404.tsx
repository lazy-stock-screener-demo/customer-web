import React from "react";

const NotFoundPage: React.FC<any> = () => {
  // staticContext.notFound = true;
  return <h1>Ooops, route not found.</h1>;
};

export default {
  component: NotFoundPage,
};
