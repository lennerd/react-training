import classNames from "classnames";
import { Hero } from "../api";
import HeroCard from "./HeroCard";

interface HeroGridProps {
  heroes: Hero[];
  className?: string;
}

export default function HeroGrid({ heroes, className }: HeroGridProps) {
  return (
    <div
      className={classNames(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
        className
      )}
    >
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
