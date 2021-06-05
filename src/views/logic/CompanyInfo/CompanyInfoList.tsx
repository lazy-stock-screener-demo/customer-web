import React from "react";
import { LeftText } from "../../dump/Text";
import Authed from "../../../pages/routes/RequireAuthedRoute";
import { WithCatalogState } from "../../../presenters/Catalog/catalogVM";
import {
  NoteList,
  Note,
  NoteItemHeader,
  NoteItemBody,
} from "../../dump/set-up/NoteList";

export const CompanyInfoList = WithCatalogState({})(() => {
  return (
    <>
      <LeftText>
        afjaisdlfjas;ldkjfdasl;djfas;ljdfalksjdflka;sjdflk;asjdlfk;jaslkdfjaskldjfal;skjflk;asdjfl;asjdflk;ajdfl;
      </LeftText>
      <NoteList>
        <Note>
          <NoteItemHeader>Company Size</NoteItemHeader>
          <NoteItemBody>200000</NoteItemBody>
        </Note>
        <Note>
          <NoteItemHeader>Industry</NoteItemHeader>
          <NoteItemBody>2001000</NoteItemBody>
        </Note>
        <Note>
          <NoteItemHeader>Capital</NoteItemHeader>
          <NoteItemBody>200000</NoteItemBody>
        </Note>
        <Note>
          <NoteItemHeader>Capital</NoteItemHeader>
          <NoteItemBody>200000</NoteItemBody>
        </Note>
        <Note>
          <NoteItemHeader>Capital</NoteItemHeader>
          <NoteItemBody>200000</NoteItemBody>
        </Note>
        <Note>
          <NoteItemHeader>Capital</NoteItemHeader>
          <NoteItemBody>200000</NoteItemBody>
        </Note>
        <Note>
          <NoteItemHeader>Capital</NoteItemHeader>
          <NoteItemBody>200000</NoteItemBody>
        </Note>
      </NoteList>
    </>
  );
});
