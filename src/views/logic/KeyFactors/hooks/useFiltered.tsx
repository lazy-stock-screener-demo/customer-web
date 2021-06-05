import React, { useState, useMemo } from "react";
import { matchSorter } from "match-sorter";
import { useDebounced } from "./useDebounce";

export const useFilteredItems = (items, { pars }) => {
  const [filteredText, setFilterText] = useState("");
  const debouncedFilterText = useDebounced(filteredText, 250);
  const parsKey = (pars || []).join(",");
  const filteredItems = useMemo(() => {
    if (items && items.length) {
      if (!pars.length) {
        return items;
      }
      const matchedItems = matchSorter(items, debouncedFilterText, {
        keys: pars,
        threshold: matchSorter.rankings.CONTAINS,
      });
      return matchedItems;
    }
    return [];
  }, [items, debouncedFilterText, parsKey]);

  return {
    filteredText,
    filteredItems,
    setFilterText,
  };
};
