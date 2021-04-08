import { Link, useParams } from "react-router-dom";
import useHero from "./useHero";

export default function HeroViewer() {
  const { slug } = useParams<{ slug: string }>();
  const hero = useHero(slug);

  if (hero == null) {
    return <div>Loading hero …</div>;
  }

  return (
    <>
      <Link to=".." className="text-blue-600 hover:text-blue-700 block mb-4">
        Heroes
      </Link>

      <h2 className="font-bold text-2xl text-blue-600">{hero.name}</h2>

      <ul className="pt-2">
        <li>
          <strong className="font-medium">Gender:</strong>{" "}
          {hero.appearance.gender}
        </li>
      </ul>

      <h2 className="font-bold text-1xl text-blue-600 mt-4">Powerstats</h2>

      <ul className="pt-2">
        <li>
          <strong className="font-medium">Intelligence:</strong>{" "}
          {hero.powerstats.intelligence}
        </li>
        <li>
          <strong className="font-medium">Power:</strong>{" "}
          {hero.powerstats.power}
        </li>
        <li>
          <strong className="font-medium">Speed:</strong>{" "}
          {hero.powerstats.speed}
        </li>
        <li>
          <strong className="font-medium">Strength:</strong>{" "}
          {hero.powerstats.strength}
        </li>
        <li>
          <strong className="font-medium">Combat:</strong>{" "}
          {hero.powerstats.combat}
        </li>
        <li>
          <strong className="font-medium">Durability:</strong>{" "}
          {hero.powerstats.durability}
        </li>
      </ul>
    </>
  );
}
