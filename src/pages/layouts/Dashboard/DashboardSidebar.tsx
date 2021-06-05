import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SibarItem } from "../../../views/dump/Sidebar";
import { dashboardRouteList } from "../../routes/index";
import { CenterText } from "../../../views/dump/Text";
import User from "../../../views/logic/User";

const SidebarContainer = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 100vh;
  border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  border-bottom: none;
`;
const SidebarHeader = styled.div.attrs((props) => ({
  className: props.className,
}))``;

const SidebarMenu = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 0.5rem;
  height: 100%;
`;
const SidebarFooter = styled.div.attrs((props) => ({
  className: props.className,
}))`
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  padding-top: 0.5em;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

export const DashboardSidebar = () => {
  return (
    <SidebarContainer className={"DashboardSidebar"}>
      <SidebarHeader className={"SidebarHeader"}>
        <h1>L</h1>
      </SidebarHeader>
      <SidebarMenu className={"SidebarMenu"}>
        {dashboardRouteList.map((route, i) => {
          return (
            <SibarItem key={i} className={"SibarItem"}>
              <Link key={i} to={route.pars.url}>
                {route.pars.name}
              </Link>
            </SibarItem>
          );
        })}
        <SibarItem>
          <User />
        </SibarItem>
      </SidebarMenu>
      <SidebarFooter className={"SidebarFooter"}>
        <CenterText>Donate</CenterText>
      </SidebarFooter>
    </SidebarContainer>
  );
};
