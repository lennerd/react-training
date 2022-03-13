import React from "react";
import usePagination from "../common/hooks/usePagination";
import Pagination from "../common/Pagination";
import HeroGrid from "./HeroGrid";
import HeroFilter from "./HeroFilter";
import useHeroes from "./useHeroes";

const HEROES_PER_PAGE = 24;

export default function HeroLister() {
  const [filter, setFilter] = React.useState("");
  const { activePage, setActivePage, getPages, offset, limit } = usePagination(
    HEROES_PER_PAGE
  );
  const { heroes, numberOfHeroes } = useHeroes(filter, offset, limit);

  return (
    <>
      <h2 className="font-bold text-2xl text-blue-600">Heroes</h2>

      <HeroFilter className="pt-3" filter={filter} onChange={setFilter} />

      <div className="pt-4">
        {heroes != null ? (
          <HeroGrid heroes={heroes} />
        ) : (
          <div>Loading heroes …</div>
        )}
      </div>

      <Pagination
        className="mt-4"
        pages={getPages(numberOfHeroes)}
        activePage={activePage}
        onPageClick={setActivePage}
      />
    </>
  );
}
