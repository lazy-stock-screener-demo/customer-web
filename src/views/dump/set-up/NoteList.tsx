import React from "react";
import styled from "styled-components";

const NoteItemBodyContainer = styled.div``;

const NoteItemHeaderContainer = styled.div``;

const NoteListContainer = styled.ul`
  width: 100%;
  display: block;
  padding: 0 5px;
`;

const NoteItemContainer = styled.li<any>`
  display: flex;
  float: left;
  width: 44%;
  margin: 1% 3%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Note = ({ children, basis }: { children: any; basis?: any }) => (
  <NoteItemContainer basis={basis ? basis : "33%"}>
    {children}
  </NoteItemContainer>
);

export const NoteList = ({ children }) => (
  <NoteListContainer>{children}</NoteListContainer>
);

export const NoteItemHeader = ({ children }) => (
  <NoteItemHeaderContainer>{children}</NoteItemHeaderContainer>
);
export const NoteItemBody = ({ children }) => (
  <NoteItemBodyContainer>{children}</NoteItemBodyContainer>
);
