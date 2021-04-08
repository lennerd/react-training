import { Link } from "react-router-dom";
import { Hero } from "../api";

interface HeroCardProps {
  hero: Hero;
}

function HeroCard({ hero }: HeroCardProps) {
  return (
    <Link
      to={`/heroes/${hero.slug}`}
      className="px-4 py-3 bg-white rounded overflow-hidden"
    >
      {hero.name}
    </Link>
  );
}

interface HeroGridProps {
  heroes: Hero[];
}

export default function HeroGrid({ heroes }: HeroGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
