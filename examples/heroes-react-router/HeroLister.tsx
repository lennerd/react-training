import React from "react";
import HeroFilter from "./HeroFilter";
import HeroGrid from "./HeroGrid";
import useHeroes from "./useHeroes";

export default function HeroLister() {
  const [filter, setFilter] = React.useState("");
  const heroes = useHeroes(filter);

  return (
    <>
      <h2 className="font-bold text-2xl text-blue-600">Heroes</h2>

      <HeroFilter className="pt-3" filter={filter} onChange={setFilter} />

      <div className="pt-4">
        {heroes != null ? (
          <HeroGrid heroes={heroes} />
        ) : (
          <p>Loading heroes …</p>
        )}
      </div>
    </>
  );
}
