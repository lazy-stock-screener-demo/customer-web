import React, { memo, Children, ReactElement } from "react";
import styled from "styled-components";

const MultiColumnsContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #272822;
  flex-direction: ${(props) => props.direction};
  color: #fff;
`;

const TwoColumnContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<any>`
  width: 100%;
  display: flex;
  flex: 0 0 50%;
  flex-direction: row;
  // background-color: #8d8d8d;
`;

const ThreeColumnContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  display: flex;
  flex: 1 1 33%;
  flex-direction: row;
  // background-color: #8d8d8d;
`;

export function TwoColumnsLayout({
  children,
  direction,
}: {
  children: any;
  direction?: any;
}): ReactElement {
  return (
    <MultiColumnsContainer
      className={"TwoColumnsContainer"}
      direction={direction ? direction : "row"}
    >
      {Children.map(children, (child, index) => (
        <TwoColumnContainer className={"ColumnsContainer"}>
          {child}
        </TwoColumnContainer>
      ))}
    </MultiColumnsContainer>
  );
}

export function ThreeColumnsLayout({ children }): ReactElement {
  return (
    <MultiColumnsContainer className={"ThreeColumnsContainer"}>
      {Children.map(children, (child, index) => (
        <ThreeColumnContainer className={"ColumnsContainer"}>
          {child}
        </ThreeColumnContainer>
      ))}
    </MultiColumnsContainer>
  );
}

export default memo(ThreeColumnsLayout);
