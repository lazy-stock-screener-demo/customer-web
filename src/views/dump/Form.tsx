import React from "react";
import styled from "styled-components";

const FormContainer = styled.form.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  flex-direction: column;
`;

export const FormCon = ({ children, ...props }) => (
  <FormContainer className={"FormCon"} {...props}>
    {children}
  </FormContainer>
);
