import React from "react";
import useDebounce from "./useDebounce";

export default function App() {
  const [value, setValue] = React.useState("Foo");
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <label>
        Wert:{" "}
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <p>Entprellter Wert: {debouncedValue}</p>
    </div>
  );
}
