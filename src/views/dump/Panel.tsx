import React from "react";
import styled from "styled-components";

interface PanelContainerProps {
  marginBottom: string;
  direction: string;
  jC?: string;
  aL?: string;
}

const PanelContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<PanelContainerProps>`
  width: 100%;
  // padding-top: 1rem;
  // padding-bottom: 1rem;
  margin-top: 0rem;
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
  flex-direction: ${(props) => props.direction};
  position: relative;
  justify-content: ${(props) => props.jC};
  align-items: ${(props) => props.aL};
`;

const RowGroupContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<PanelContainerProps>`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 0rem;
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
  flex-direction: ${(props) => props.direction};
  position: relative;
  justify-content: ${(props) => props.jC};
`;

export const Panel = ({
  children,
  jC,
  aL = "initial",
  marginBottom,
  direction,
}) => (
  <PanelContainer
    className={"PanelContainer"}
    jC={jC ? jC : "center"}
    aL={aL ? aL : "initial"}
    direction={direction}
    marginBottom={marginBottom}
  >
    {children}
  </PanelContainer>
);

export const RowGroup = ({ children, jC, marginBottom }) => (
  <RowGroupContainer
    className={"RowGroupContainer"}
    direction={"row"}
    jC={jC}
    marginBottom={marginBottom}
  >
    {children}
  </RowGroupContainer>
);

// const UserSectionPanel = Panel({jC: 'center', marginBottom: 'orem'})

// const UserSectionPanel = ({ children , jC, marginBottom }) => (
//   <UserSectionContainer jC={jC} marginBottom={marginBottom}>{children}</UserSectionContainer>
// );

// const CurrentPromotionPanel = ({ children, jC, marginBottom }) => (
//   <CurrentPromotionContainer jC={jC} marginBottom={marginBottom}>{children}</CurrentPromotionContainer>
// );

// export { UserSectionPanel, CurrentPromotionPanel };
