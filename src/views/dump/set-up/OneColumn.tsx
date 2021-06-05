import React, { ReactElement } from "react";
import styled from "styled-components";

const OneColumnContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #272822;
  color: #fff;
`;

interface IColumnContainer {
  direction?: string;
}

const ColumnContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<IColumnContainer>`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-direction: ${(props) => props.direction};
  // background-color: #8d8d8d;
`;

export function OneColumnLayout({
  children,
  direction,
}: {
  children: any;
  direction?: any;
}): ReactElement {
  return (
    <OneColumnContainer className={"OneColumn"}>
      <ColumnContainer
        className={"Column"}
        direction={direction ? direction : "row"}
      >
        {children}
      </ColumnContainer>
    </OneColumnContainer>
  );
}
