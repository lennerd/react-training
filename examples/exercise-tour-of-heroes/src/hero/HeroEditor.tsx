import React from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import HeroPowerRange from "./HeroPowerRange";
import useHero from "./useHero";

interface HeroFormData {
  name: string;
  gender: "male" | "female";
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export default function HeroEditor() {
  const { register, handleSubmit } = useForm<HeroFormData>();
  const { slug } = useParams<{ slug: string }>();
  const { hero, updateHero } = useHero(slug);
  const navigate = useNavigate();

  const handleSubmitForm = handleSubmit((formData) => {
    if (hero == null) {
      return;
    }

    updateHero({
      ...hero,
      name: formData.name,
      appearance: {
        ...hero.appearance,
        gender: formData.gender,
      },
      powerstats: {
        ...hero.powerstats,
        intelligence: formData.intelligence,
        strength: formData.strength,
        speed: formData.speed,
        durability: formData.durability,
        power: formData.power,
        combat: formData.combat,
      },
    });
    navigate(`/heroes/${hero.slug}`);
  });

  if (hero == null) {
    return <div>Loading hero …</div>;
  }

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

      <form onSubmit={handleSubmitForm}>
        <label className="pt-3 flex items-baseline">
          Name:
          <input
            defaultValue={hero.name}
            className="ml-3 px-3 py-2 w-full border rounded"
            {...register("name")}
          />
        </label>

        <label className="pt-3 flex items-baseline">
          Gender:
          <select
            defaultValue={hero.appearance.gender}
            className="ml-3 px-3 py-2 w-full border rounded"
            {...register("gender")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <HeroPowerRange
          defaultValue={hero.powerstats.intelligence}
          label="Intelligence:"
          {...register("intelligence", { valueAsNumber: true })}
        />

        <HeroPowerRange
          defaultValue={hero.powerstats.strength}
          label="Strength:"
          {...register("strength", { valueAsNumber: true })}
        />

        <HeroPowerRange
          defaultValue={hero.powerstats.speed}
          label="Speed:"
          {...register("speed", { valueAsNumber: true })}
        />

        <HeroPowerRange
          defaultValue={hero.powerstats.durability}
          label="Durability:"
          {...register("durability", { valueAsNumber: true })}
        />

        <HeroPowerRange
          defaultValue={hero.powerstats.power}
          label="Power:"
          {...register("power", { valueAsNumber: true })}
        />

        <HeroPowerRange
          defaultValue={hero.powerstats.combat}
          label="Combat:"
          {...register("combat", { valueAsNumber: true })}
        />

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
