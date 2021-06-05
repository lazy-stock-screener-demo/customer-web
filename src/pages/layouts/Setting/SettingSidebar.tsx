import React from "react";
import styled from "styled-components";
import { SibarItem, SibarList } from "../../../views/dump/Sidebar";
import { settingRouteList } from "../../routes/index";
import { Link } from "react-router-dom";
const SidebarContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 100vh;
  background: #272822;
`;
const SidebarHeader = styled.div.attrs((props) => ({
  className: props.className,
}))`
  background: #282828;
  margin: 72px 5px 5px 5px;
  padding: 0 10px 0 10px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
`;

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
  border-top: 1px solid #7f7f7f;
`;

export const SettingSidebar = () => {
  return (
    <SidebarContainer className={"SettingSidebar"}>
      <SidebarHeader className={"SidebarHeader"}>
        <SibarList className={"SibarList"}>
          {settingRouteList.map((route, i) => {
            return (
              <SibarItem key={i}>
                <Link to={route.pars.url}>{route.pars.name}</Link>
              </SibarItem>
            );
          })}
        </SibarList>
      </SidebarHeader>
    </SidebarContainer>
  );
};
