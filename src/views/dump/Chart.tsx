import React from "react";
import styled from "styled-components";

const ChartContainer = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
`;

const ChartHeaderContainer = styled.h3`
  padding: 20px 10px 20px 5%;
  text-align: left;
`;

const ChartBodyContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const ChartBody = ({ children }) => (
  <ChartBodyContainer>{children}</ChartBodyContainer>
);
export const ChartHeader = ({ children }) => (
  <ChartHeaderContainer>{children}</ChartHeaderContainer>
);

export const Chart = ({ children }) => (
  <ChartContainer>{children}</ChartContainer>
);
