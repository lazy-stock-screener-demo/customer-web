import React, { useEffect, useRef, useState, useMemo } from "react";

const getStringValue = (item, property) => (item[property] || "").toLowerCase();

const sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

const sortByString = (items, sortKey, sortDir) => {
  return items.sort(sortBy(sortKey));
};

export const useSortedItems = (items, { pars, sortItems = sortByString }) => {
  const sortItemsRef = useRef(sortItems);

  useEffect(() => {
    sortItemsRef.current = sortItems;
  }, [sortItems]);
  console.log("pars", pars);
  const [sortPars, setSort] = useState({
    sortDir: "asc",
    sortKey: "",
    ...pars,
  });
  console.log("sortPars", sortPars);
  const handleSort = (newSortKey) => {
    const isAsc = sortPars.sortKey === newSortKey && sortPars.sortDir === "asc";
    setSort({
      sortKey: newSortKey,
      sortDir: isAsc ? "desc" : "asc",
    });
  };

  const sortedItems = useMemo(
    () => sortItemsRef.current(items, sortPars.sortKey, sortPars.sortDir),
    [items, sortPars]
  );
  console.log("sortedItems", sortedItems);
  return {
    sortedItems,
    handleSort,
    ...sortPars,
  };
};
