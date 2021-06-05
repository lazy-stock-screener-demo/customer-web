import React, { memo, useState, useEffect } from "react";
import MultiColumnsLayout from "../../../views/dump/set-up/MultiColumns";

export const HeaderContainer = ({ children }) => {
  return <MultiColumnsLayout>{children}</MultiColumnsLayout>;
};

export default memo(HeaderContainer);
