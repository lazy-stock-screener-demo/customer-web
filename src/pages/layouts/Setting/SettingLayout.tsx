import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SettingSidebar } from "./SettingSidebar";

// import { IStaffState } from "../../modules/staff/model/infra/state-mangment/state-models/IStaffState";
// interface LoginProps {
//   staff: IStaffState;
// }

const SettingContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  background-color: #272822;
  color: #fff;
`;

const SettingMain = styled.div.attrs((props) => ({
  className: props.className,
}))`
  flex: 1;
  background-color: #272822;
`;

const MainBody = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 93%;
  height: 100%;
  margin: auto;
`;

export const SettingLayout = ({ children }): ReactElement => {
  return (
    <SettingContainer className={"Setting"}>
      <SettingSidebar />
      <SettingMain className={"SettingMain"}>
        <MainBody className={"MainBody"}>{children}</MainBody>
      </SettingMain>
    </SettingContainer>
  );
};
