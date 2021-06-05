import React from "react";
import styled from "styled-components";
import MUIButton from "@material-ui/core/Button";

const ButtonCon = styled.div`
  margin-bottom: 1rem;
`;

export const Button = ({ children, ...props }) => (
  <ButtonCon>
    <MUIButton {...props}>{children}</MUIButton>
  </ButtonCon>
);
