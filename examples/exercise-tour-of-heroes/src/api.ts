import data from "./heroes.json";

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

function fakeApiRequest<T>(data: T) {
  return new Promise<T>((resolve) => {
    const delay = 100 + Math.round(400 * Math.random());

    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

let heroes: Hero[] = data;

export async function getHeroes(): Promise<{
  heroes: Hero[];
  numberOfHeroes: number;
}>;
export async function getHeroes(
  filter: string,
  offset: number,
  limit: number
): Promise<{ heroes: Hero[]; numberOfHeroes: number }>;
export async function getHeroes(
  filter?: string,
  offset?: number,
  limit?: number
): Promise<{ heroes: Hero[]; numberOfHeroes: number }> {
  const lowercaseFilter = filter?.toLocaleLowerCase();
  const filteredHeroes =
    lowercaseFilter != null && lowercaseFilter.length > 0
      ? heroes.filter((hero) =>
          hero.name.toLocaleLowerCase().includes(lowercaseFilter)
        )
      : heroes;

  const slicedHeroes =
    offset != null && limit != null
      ? filteredHeroes.slice(offset, offset + limit)
      : filteredHeroes;

  return fakeApiRequest({
    heroes: slicedHeroes,
    numberOfHeroes: heroes.length
  });
}

export async function getHero(slug: string): Promise<{ hero: Hero }> {
  const hero = heroes.find((hero) => hero.slug === slug);

  return fakeApiRequest(hero).then((hero) => {
    if (hero == null) {
      throw new Error("404: Unknown hero.");
    }

    return { hero };
  });
}

export async function postHero(newHero: Hero): Promise<{ hero: Hero }> {
  const index = heroes.findIndex((hero) => hero.id === newHero.id);

  return fakeApiRequest(index).then((index) => {
    if (index === -1) {
      throw new Error("404: Unknown hero.");
    }

    heroes.splice(index, 1, newHero);

    return { hero: newHero };
  });
}
