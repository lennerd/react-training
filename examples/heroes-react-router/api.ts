import axios from "axios";

export interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Appearance {
  gender: string;
  race: string | null;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string | null;
  alignment: string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  groupAffiliation: string;
  relatives: string;
}

export interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

export async function getHeroes(filter: string): Promise<Hero[]> {
  const { data: heroes } = await axios.get<Hero[]>("/heroes.json");
  const lowercaseFilter = filter.toLocaleLowerCase();

  return lowercaseFilter.length > 0
    ? heroes.filter((hero) =>
        hero.name.toLocaleLowerCase().includes(lowercaseFilter)
      )
    : heroes;
}

export async function getHero(slug: string): Promise<Hero> {
  const { data: heroes } = await axios.get<Hero[]>("/heroes.json");
  const hero = heroes.find((hero) => hero.slug === slug);

  if (hero == null) {
    throw new Error("Hero not found.");
  }

  return hero;
}
