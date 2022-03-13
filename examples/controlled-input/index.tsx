import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
