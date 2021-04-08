import { useQuery } from "react-query";
import { getHero, Hero } from "./api";

export default function useHero(slug: string): Hero {
  const { data } = useQuery(["hero", slug], () => getHero(slug));

  return data;
}
