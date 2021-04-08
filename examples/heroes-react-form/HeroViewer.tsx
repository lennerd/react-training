import { Link, Route, Switch, useParams } from "react-router-dom";
import HeroEditor from "./HeroEditor";
import useHero from "./useHero";

export default function HeroViewer() {
  const { slug } = useParams<{ slug: string }>();
  const hero = useHero(slug);

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

      <Switch>
        <Route path={`/heroes/${hero.slug}`} exact>
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

          <Link
            to={`/heroes/${hero.slug}/edit`}
            className="inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300 mt-4"
          >
            Bearbeiten
          </Link>
        </Route>

        <Route path={`/heroes/${hero.slug}/edit`}>
          <HeroEditor hero={hero} />
        </Route>
      </Switch>
    </>
  );
}
