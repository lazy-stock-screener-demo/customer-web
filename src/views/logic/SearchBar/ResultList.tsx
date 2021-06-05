import React from "react";
import { SearchResultList, SearchResultItem } from "../../dump/SearchBar";
import { useSearch } from "./hooks/useSearch";

export const ResultList = ({ list, location }) => {
  const { handdleFetchStock } = useSearch({
    location,
  });

  return (
    list && (
      <SearchResultList className={"SearchResultList"}>
        {list.map((item, i) => (
          <SearchResultItem key={i} className={"SearchResultItem"}>
            <button key={item.key} onClick={handdleFetchStock} value={item}>
              {item}
            </button>
          </SearchResultItem>
        ))}
      </SearchResultList>
    )
  );
};
