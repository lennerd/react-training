import { useQuery } from "react-query";
import { getHeroes, Hero } from "./api";

export default function useHeroes(filter: string): Hero[] {
  const { data } = useQuery(["heroes", filter], () => getHeroes(filter), {
    keepPreviousData: true
  });

  return data;
}
