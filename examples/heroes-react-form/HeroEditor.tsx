import { FormEvent, useState } from "react";
import { Hero } from "./api";
import HeroPowerRange from "./HeroPowerRange";

interface HeroEditorProps {
  hero: Hero;
  onSubmit(hero: Hero): void;
}

export default function HeroEditor({ hero }: HeroEditorProps) {
  const [name, setName] = useState(hero.name);
  const [gender, setGender] = useState(hero.appearance.gender);
  const [intelligence, setIntelligence] = useState(
    hero.powerstats.intelligence
  );
  const [strength, setStrength] = useState(hero.powerstats.strength);
  const [durability, setDurability] = useState(hero.powerstats.durability);
  const [speed, setSpeed] = useState(hero.powerstats.speed);
  const [power, setPower] = useState(hero.powerstats.power);
  const [combat, setCombat] = useState(hero.powerstats.combat);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      ...hero,
      name,
      gender,
      powerstats: {
        ...hero.powerstats,
        intelligence,
        strength,
        durability,
        speed,
        power,
        combat
      }
    });
  };

  return (
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
          Save
        </button>
      </div>
    </form>
  );
}
