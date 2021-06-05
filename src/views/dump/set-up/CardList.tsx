import React from "react";
import styled from "styled-components";

const CardListContainer = styled.ul<any>`
  display: flex;
  padding: 0;
  justify-content: ${(props) => props.jC};
  align-items: flex-start;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
`;

const CardItemContainer = styled.li.attrs((props) => ({
  className: props.className,
}))<any>`
  display: inline-block;
  flex: 0 0 ${(props) => props.basis};
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-bottom: 15px;
  padding: 0%;
  border-radius: 5px;
  background-color: #2e3442;
  border-color: rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
    0px 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
`;

const Card = ({ children, basis }: { children: any; basis?: any }) => (
  <CardItemContainer basis={basis ? basis : "30%"} className={"CardItem"}>
    {children}
  </CardItemContainer>
);

export const CardList = ({ children, jC }) => (
  <CardListContainer className={"CardList"} jC={jC ? jC : "space-evenly"}>
    {children}
  </CardListContainer>
);

export default Card;
