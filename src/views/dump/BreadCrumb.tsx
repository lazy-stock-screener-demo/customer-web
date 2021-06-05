import React from "react";
import styled from "styled-components";

const BreadCrumbListContainer = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const BreadCrumbItemContainer = styled.li`
  margin: 5px 10px 5px 0;
  > a {
    text-decoration: underline;
  }
  :before {
    content: ">";
  }
`;

export const BreadCrumb = ({ children }) => {
  return (
    <BreadCrumbListContainer className="breadcrumb">
      {children}
    </BreadCrumbListContainer>
  );
};
export const BreadCrumbItem = ({ children }) => {
  return (
    <BreadCrumbItemContainer className="breadcrumb-item">
      {children}
    </BreadCrumbItemContainer>
  );
};
