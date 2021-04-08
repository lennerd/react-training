import { useQuery } from "react-query";
import { getHeroes, Hero } from "../api";

export default function useHeroes(): {
  heroes?: Hero[] | undefined;
  numberOfHeroes?: number;
};
export default function useHeroes(
  filter: string,
  offset: number,
  limit: number
): { heroes?: Hero[] | undefined; numberOfHeroes?: number };
export default function useHeroes(
  filter?: string,
  offset?: number,
  limit?: number
): { heroes?: Hero[] | undefined; numberOfHeroes?: number } {
  const { data } = useQuery(
    ["heroes", filter, offset, limit],
    () => getHeroes(filter, offset, limit),
    {
      keepPreviousData: true
    }
  );

  return { heroes: data?.heroes, numberOfHeroes: data?.numberOfHeroes };
}
