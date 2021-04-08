import { useState } from "react";
import HeroGrid from "./HeroGrid";
import HeroFilter from "./HeroFilter";
import useHeroes from "./useHeroes";

export default function HeroLister() {
  const [filter, setFilter] = useState("");
  const heroes = useHeroes(filter);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="font-bold text-2xl text-blue-600">Heroes</h2>

      <HeroFilter className="pt-3" filter={filter} onChange={setFilter} />

      <div className="pt-4">
        {heroes != null ? (
          <HeroGrid heroes={heroes} />
        ) : (
          <p>Loading heroes …</p>
        )}
      </div>
    </div>
  );
}
