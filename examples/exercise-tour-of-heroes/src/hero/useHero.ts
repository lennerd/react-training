import { useMutation, useQuery, useQueryClient } from "react-query";
import { getHero, Hero, postHero } from "../api";

export default function useHero(
  slug: string
): { hero: Hero | undefined; updateHero(hero: Hero): void } {
  const queryClient = useQueryClient();
  const { data } = useQuery(["hero", slug], () => getHero(slug));
  const { mutate } = useMutation(postHero, {
    onSuccess: () => {
      // Invalidate and refetch hero query
      queryClient.invalidateQueries(["hero", slug]);
    }
  });

  return {
    hero: data?.hero,
    updateHero: mutate
  };
}
