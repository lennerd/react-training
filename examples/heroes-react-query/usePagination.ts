import { useCallback, useState } from "react";

export default function usePagination(
  itemsPerPage: number
): {
  activePage: number;
  setActivePage(page: number): void;
  getPages(numberOfItems: number | undefined): number[];
  offset: number;
  limit: number;
} {
  const [activePage, setActivePage] = useState(1);
  /*const slice = useCallback(
    (data: any[] | undefined) => {
      if (data == null) {
        return { pages: [], data };
      }

      const numberOfPages = Math.ceil(data.length / itemsPerPage);

      return {
        pages: Array(numberOfPages)
          .fill(null)
          .map((_, i) => i + 1),
        data: data?.slice(
          itemsPerPage * (activePage - 1),
          itemsPerPage * activePage
        )
      };
    },
    [itemsPerPage, activePage]
  );*/

  const getPages = useCallback(
    (numberOfItems: number | undefined) => {
      if (numberOfItems == null) {
        return [];
      }

      const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

      return Array(numberOfPages)
        .fill(null)
        .map((_, i) => i + 1);
    },
    [itemsPerPage]
  );

  const offset = itemsPerPage * (activePage - 1);
  const limit = itemsPerPage;

  return {
    activePage,
    setActivePage,
    getPages,
    offset,
    limit
  };
}
