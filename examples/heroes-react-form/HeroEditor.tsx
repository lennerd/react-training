import React from "react";
import { Link, useParams } from "react-router-dom";
import HeroPowerRange from "./HeroPowerRange";
import useHero from "./useHero";

export default function HeroEditor() {
  const { slug } = useParams<{ slug: string }>();
  const hero = useHero(slug);
  const [name, setName] = React.useState(hero.name);
  const [gender, setGender] = React.useState(hero.appearance.gender);
  const [intelligence, setIntelligence] = React.useState(
    hero.powerstats.intelligence
  );
  const [strength, setStrength] = React.useState(hero.powerstats.strength);
  const [durability, setDurability] = React.useState(
    hero.powerstats.durability
  );
  const [speed, setSpeed] = React.useState(hero.powerstats.speed);
  const [power, setPower] = React.useState(hero.powerstats.power);
  const [combat, setCombat] = React.useState(hero.powerstats.combat);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log({
      ...hero,
      name,
      appearance: {
        ...hero.appearance,
        gender,
      },
      powerstats: {
        ...hero.powerstats,
        intelligence,
        strength,
        durability,
        speed,
        power,
        combat,
      },
    });
  };

  return (
    <>
      <Link
        to="/heroes"
        className="text-blue-600 hover:text-blue-700 block mb-4"
      >
        Heroes
      </Link>

      <Link to={`/heroes/${hero.slug}`}>
        <h2 className="font-bold text-2xl text-blue-600">{hero.name}</h2>
      </Link>

      <form onSubmit={handleSubmit}>
        <label className="pt-3 flex items-baseline">
          Name:
          <input
            value={name}
            className="ml-3 px-3 py-2 w-full border rounded"
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="pt-3 flex items-baseline">
          Gender:
          <select
            value={gender}
            className="ml-3 px-3 py-2 w-full border rounded"
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <HeroPowerRange
          value={intelligence}
          label="Intelligence:"
          onChange={setIntelligence}
        />

        <HeroPowerRange
          value={strength}
          label="Strength:"
          onChange={setStrength}
        />

        <HeroPowerRange value={speed} label="Speed:" onChange={setSpeed} />

        <HeroPowerRange
          value={durability}
          label="Durability:"
          onChange={setDurability}
        />

        <HeroPowerRange value={power} label="Power:" onChange={setPower} />

        <HeroPowerRange value={combat} label="Combat:" onChange={setCombat} />

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300"
          >
            Save Hero
          </button>
        </div>
      </form>
    </>
  );
}
