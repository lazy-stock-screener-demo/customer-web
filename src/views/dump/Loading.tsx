import React from "react";
//@ts-ignore
import LoadingOverlay from "react-loading-overlay";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Loading: React.FC<{ active: boolean }> = ({
  children,
  active,
}) => (
  <LoadingContainer>
    <LoadingOverlay
      active={active}
      styles={{
        wrapper: {
          width: "100%",
          height: "100%",
          overflow: "initial",
          display: "inherit",
          justifyContent: "inherit",
        },
      }}
      spinner
    />
    {/* {children} */}
    {/* </LoadingOverlay> */}
  </LoadingContainer>
);
