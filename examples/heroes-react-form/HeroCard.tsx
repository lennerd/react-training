import { Hero } from "./api";

interface HeroCardProps {
  hero: Hero;
}

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <div className="px-4 py-3 bg-white rounded overflow-hidden">
      {hero.name}
    </div>
  );
}
