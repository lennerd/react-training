import React from "react";
import useDebounce from "./useDebounce";

export default function App() {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, 1000);

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
