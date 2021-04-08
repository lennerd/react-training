import { getHeroes } from "./api";
import usePromise from "./usePromise";

export default function App() {
  const { data } = usePromise(() => getHeroes(), []);

  return (
    <>
      <h1>Heroes</h1>

      {data == null ? (
        "Loading heroes"
      ) : (
        <ul>
          {data.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
