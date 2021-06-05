import React, { forwardRef } from "react";
import styled from "styled-components";

export const SearchBarCon = styled.div.attrs((props) => ({}))<any>`
  width: 30%;
  min-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SearchResultList = styled.ul.attrs((props) => ({}))<any>`
  position: absolute;
  z-index: 3;
  padding-left: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
`;
export const SearchResultItem = styled.li.attrs((props) => ({}))<any>`
  padding: 7px 0;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const SearchResult = styled.div.attrs((props) => ({}))<any>`
  display: flex;
  flex: 1 0 100;
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input.attrs((props) => ({}))<any>`
  display: flex;
  width: 100%;
  flex: 1 0 100;
  padding: 10px 0 10px 5px;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.2rem;
`;
