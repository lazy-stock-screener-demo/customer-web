import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.nav.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  flex: 1 0 100;
  flex-direction: row;
  justify-content: center;
`;

export const TopNavBar = ({ children }) => (
  <NavBarContainer className={"NavBarContainer"}>{children}</NavBarContainer>
);
