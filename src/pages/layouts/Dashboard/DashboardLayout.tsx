import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";

const DashboardContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  background-color: #1e1e1e;
  color: #fff;
`;

const DashboardMain = styled.div.attrs((props) => ({
  className: props.className,
}))`
  flex: 1;
  height: 100vh;
  background-color: #272822;
  overflow-y: scroll;
`;

const MainBody = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const DashboardLayout = ({ children }): ReactElement => {
  console.log("render Dashboard");
  return (
    <DashboardContainer className={"DashboardContainer"}>
      <DashboardSidebar />
      <DashboardMain className={"DashboardMain"}>
        <MainBody className={"MainBody"}>{children}</MainBody>
      </DashboardMain>
    </DashboardContainer>
  );
};
