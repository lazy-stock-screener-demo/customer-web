import React, { ReactElement } from "react";
import styled from "styled-components";

const LoginContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  background-color: #1e1e1e;
  color: #fff;
`;

const LoginMain = styled.div.attrs((props) => ({
  className: props.className,
}))`
  flex: 1;
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #272822;
  overflow-y: scroll;
  height: 100vh;
`;
const MainBody = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 50%;
  height: 100%;
  margin: auto;
`;

export const LoginLayout = ({ children }): ReactElement => {
  return (
    <LoginContainer className={"LoginContainer"}>
      <LoginMain className={"LoginMain"}>
        <MainBody className={"MainBody"}>{children}</MainBody>
      </LoginMain>
    </LoginContainer>
  );
};
