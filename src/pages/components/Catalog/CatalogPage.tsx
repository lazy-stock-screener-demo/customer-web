import React, { useState, useEffect, memo } from "react";

import { WithCatalogLocalCtx } from "../../../presenters/Catalog/catalogVM";
import {
  InfoSecion,
  RadarChartSection,
  KeyFactorSection,
} from "./CatalogSectionBlocks";
import { RowGroup } from "../../../views/dump/Panel";
import SearchBar from "../../../views/logic/SearchBar";
import MultiColumnsLayout from "../../../views/dump/set-up/MultiColumns";
import { tabsBody, tabList } from "./CatalogTabs";
import { ReportSection } from "./CatalogSectionBlocks";
import { RouteConfig } from "react-router-config";
import HeaderContainer from "./CatalogHeader";
import { OneColumnLayout } from "../../../views/dump/set-up/OneColumn";
import {
  TabPageContainer,
  TabPageHeader,
  TabPageBody,
} from "../../../views/logic/shared/Tabs";
import { TopNavBar } from "../../../views/dump/NavBar";

const CatalogPage = memo<RouteConfig>(({ location }) => {
  console.log("Render CatalogPage");
  return (
    <>
      <TopNavBar>
        <SearchBar location={location} />
      </TopNavBar>
      <h2>Company Overview</h2>
      <HeaderContainer>
        <InfoSecion />
        <RadarChartSection />
        <KeyFactorSection />
      </HeaderContainer>
      <OneColumnLayout direction={"row"}>
        <ReportSection>
          <TabPageContainer tabList={tabList} location={location}>
            {({ setTabPage, tabPageState, tabList }) => (
              <>
                <RowGroup jC={"center"} marginBottom={"0rem"}>
                  <TabPageHeader
                    tabPageState={tabPageState}
                    setTabPage={setTabPage}
                    tabList={tabList}
                  />
                </RowGroup>
                <TabPageBody tabPageState={tabPageState} tabsBody={tabsBody} />
              </>
            )}
          </TabPageContainer>
        </ReportSection>
      </OneColumnLayout>
    </>
  );
});

export default (routeProps) => WithCatalogLocalCtx(routeProps)(CatalogPage)();
