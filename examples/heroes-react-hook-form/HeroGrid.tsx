import { Hero } from "./api";
import HeroCard from "./HeroCard";

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
