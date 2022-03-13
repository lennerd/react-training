import React from "react";
import { Hero } from "../api";
import HeroGrid from "../hero/HeroGrid";
import useHeroes from "../hero/useHeroes";

/*

intelligence: formData.intelligence,
        strength: formData.strength,
        speed: formData.speed,
        durability: formData.durability,
        power: formData.power,
        combat: formData.combat

        */

type Criteria = keyof Hero["powerstats"];

export default function Dashboard() {
  const { heroes } = useHeroes();
  const [criteria, setCriteria] = React.useState<Criteria>("strength");

  if (heroes == null) {
    return <div>Loading heroes …</div>;
  }

  const bestHeroes = [...heroes].sort(
    (a, b) => b.powerstats[criteria] - a.powerstats[criteria]
  );

  return (
    <>
      <h2 className="font-bold text-2xl text-blue-600">
        <select
          className="border rounded"
          value={criteria}
          onChange={(event) => setCriteria(event.target.value as Criteria)}
        >
          <option value="intelligence">Cleverest</option>
          <option value="strength">Strongest</option>
          <option value="speed">Fastest</option>
          <option value="durability">Most durable</option>
          <option value="power">Most powerful</option>
          <option value="combat">Best combat</option>
        </select>{" "}
        Heroes
      </h2>

      <HeroGrid className="pt-4" heroes={bestHeroes.slice(0, 24)} />
    </>
  );
}
