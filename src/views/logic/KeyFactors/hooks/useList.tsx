import { useSortedItems } from "./useSorted";
import { useFilteredItems } from "./useFiltered";
import { usePaged } from "./usePaged";

export const useList = (
  items,
  { filterKeys = [], sortKey, sortDir, pageSize }
) => {
  items = items.filter((ele) => ele.isVisible);
  const { filteredItems, ...usefilterStateObj } = useFilteredItems(items, {
    pars: filterKeys,
  });
  const { sortedItems, ...useSortedStateObj } = useSortedItems(filteredItems, {
    pars: { sortKey, sortDir },
  });
  const [showingItems, paging] = usePaged(sortedItems, { pageSize });

  const stats = {
    totalItems: items.length,
    start: (paging.currentPage - 1) * pageSize + 1,
    end: Math.min(paging.currentPage * pageSize, items.length),
  };

  return {
    usefilterStateObj,
    useSortedStateObj,
    showingItems,
    paging,
    stats,
  };
};
