import React from "react";
import { TwoColumnsLayout } from "../../../views/dump/set-up/MultiColumns";
import { SigninSecion } from "./IdentitySectionBlocks";
// interface LoginProps {
//   staff: IStaffState;
// }
import { RowGroup } from "../../../views/dump/Panel";
import {
  TabPageContainer,
  TabPageHeader,
  TabPageBody,
} from "../../../views/logic/shared/Tabs";
import { tabsBody, tabList } from "./IdentityPageTabs";
const IdentityPage = ({ location }) => {
  return (
    <TwoColumnsLayout direction={"column"}>
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
      {/* <SigninSecion /> */}
    </TwoColumnsLayout>
  );
};

export default IdentityPage;
