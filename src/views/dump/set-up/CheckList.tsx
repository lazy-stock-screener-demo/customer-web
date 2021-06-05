import React from "react";
import styled from "styled-components";
import { CheckLabel } from "../../../views/dump/CheckLabel";
const CheckItemContainer = styled.li.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  flex-direction: row;
  > p {
    margin: 0;
  }
`;

const CheckListContainer = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  list-style: none;
  flex-wrap: wrap;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const CheckItem = ({
  children,
  basis,
}: {
  children: any;
  basis?: any;
}) => (
  <CheckItemContainer basis={basis ? basis : "30%"} className={"CardItem"}>
    <CheckLabel />
    {children}
  </CheckItemContainer>
);

export const CheckList = ({ children }) => (
  <CheckListContainer className={"CheckList"}>{children}</CheckListContainer>
);
