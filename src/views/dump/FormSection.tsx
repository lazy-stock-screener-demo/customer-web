import React from "react";
import styled from "styled-components";

export const Hr = styled.hr`
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
`;

const SectionContainer = styled.section.attrs((props) => ({
  className: props.className,
}))<any>`
  flex: 0 0 99%;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: auto;
  margin-right: auto;
  align-items: ${(props) => props.aL};
  text-align: left;
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

const SectionHeaderContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<any>`
  font-size: 1.3rem;
  padding: 0 0 8px 0;
  margin-top: 0;
  text-align: ${(props) => props.textAlign};
  width: 40%;
  // height: 100%;
`;

const SectionHeaderTextContainer = styled.h2.attrs((props) => ({
  className: props.className,
}))<any>`
  font-size: 1.3rem;
  padding: 0 0 8px 0;
  margin-top: 0;
  text-align: ${(props) => props.textAlign};
  width: 100%;
  // height: 100%;
`;

const SectionTextContainer = styled.p.attrs((props) => ({
  className: props.className,
}))<any>`
  font-size: 0.9rem;
  color: #969696;
  padding: 0;
`;

const SectionBodyContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  width: 60%;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionFieldContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const FormSection = ({
  children,
  direction,
  aL,
}: {
  children: any;
  direction?: any;
  aL: any;
}) => (
  <SectionContainer
    className={"FormSection"}
    direction={direction ? direction : "row"}
    aL={aL ? aL : "center"}
  >
    {typeof children == "function" ? children() : children}
  </SectionContainer>
);

export const FormSectionHeader = ({ children, ...props }) => {
  return (
    <SectionHeaderContainer {...props} className={"FormSectionHeader"}>
      {children}
    </SectionHeaderContainer>
  );
};

export const FormSectionHeaderText = ({
  children,
  textAlign,
}: {
  children: any;
  textAlign?: any;
}) => {
  return (
    <SectionHeaderTextContainer
      className={"FormSectionHeaderText"}
      textAlign={textAlign ? textAlign : "left"}
    >
      {typeof children == "function" ? children() : children}
    </SectionHeaderTextContainer>
  );
};

export const FormSectionDesc = ({ children }) => (
  <SectionTextContainer>
    {typeof children == "function" ? children() : children}
  </SectionTextContainer>
);

export const FormSectionBody = ({ children }) => (
  <SectionBodyContainer className={"FormSectionBody"}>
    {typeof children == "function" ? children() : children}
  </SectionBodyContainer>
);

export const FormSectionFieldCon = ({ children }) => (
  <SectionFieldContainer className={"FormSectionField"}>
    {typeof children == "function" ? children() : children}
  </SectionFieldContainer>
);
