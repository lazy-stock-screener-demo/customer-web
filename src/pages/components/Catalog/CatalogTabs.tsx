import React, { useState, useEffect } from "react";
import { ProfitTabSection } from "./CatalogSectionBlocks";
export const tabList = ["Profit", "Growth", "Safety"];

const ProfitTab = () => {
  return (
    <>
      <ProfitTabSection />
    </>
  );
};
const GrowthTab = () => {
  return <>Page2</>;
};
const SafetyTab = () => {
  return <>Page3</>;
};

export const tabsBody = {
  Profit: ProfitTab(),
  Growth: GrowthTab(),
  Safety: SafetyTab(),
};
