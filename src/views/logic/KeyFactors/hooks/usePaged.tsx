import { useMemo, useState, useEffect } from "react";

const normalizePage = (newPage, totalPages, enableWrapping = false) => {
  if (newPage < 1) {
    return enableWrapping ? totalPages : 1;
  } else if (newPage > totalPages) {
    return enableWrapping ? 1 : totalPages;
  }
  return newPage;
};

export const usePaging = ({
  itemCount,
  pageSize,
  initialPage = 1,
  enableWrapping = false,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(itemCount / pageSize);

  const actions = useMemo(() => {
    return {
      goBack: () => {
        setCurrentPage((current) => {
          return normalizePage(current - 1, totalPages, enableWrapping);
        });
      },
      goForward: () => {
        setCurrentPage((current) => {
          return normalizePage(current + 1, totalPages, enableWrapping);
        });
      },
      goTo: (targetPage) => {
        setCurrentPage(normalizePage(targetPage, totalPages, enableWrapping));
      },
    };
  }, [setCurrentPage, totalPages, enableWrapping]);

  useEffect(() => {
    setCurrentPage((current) =>
      normalizePage(current, totalPages, enableWrapping)
    );
  }, [totalPages, enableWrapping]);
  return {
    currentPage,
    totalPages,
    ...actions,
  };
};

export const usePaged = (
  items,
  { pageSize = 10, initialPage = 1, enableWrapping = false }
) => {
  console.log("items", items);
  let paging = usePaging({ itemCount: items.length, pageSize, initialPage });
  const startIndex =
    items.length <= pageSize ? 0 : paging.currentPage * pageSize - pageSize;
  let endIndex = startIndex + pageSize;
  let isWrapping = endIndex > items.length;

  let filterItems = items.slice(startIndex, endIndex);
  if (enableWrapping && isWrapping) {
    items = [...items, ...items.slice(0, endIndex - items.length)];
  }

  return [filterItems, paging];
};
