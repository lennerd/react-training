import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <p>
        <label htmlFor="name">Name:</label>
        <br />
        {/* Input is a controlled component. */}
        <input
          id="name"
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
        />
      </p>
      <p>Name: {value}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
