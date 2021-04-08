import { Link } from "react-router-dom";
import { Hero } from "./api";

interface HeroCardProps {
  hero: Hero;
}

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <Link
      to={`/heroes/${hero.slug}`}
      className="px-4 py-3 bg-white hover:bg-blue-100 rounded overflow-hidden"
    >
      {hero.name}
    </Link>
  );
}
