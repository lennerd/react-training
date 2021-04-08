import React, { useState } from "react";
import ReactDOM from "react-dom";
import ControlledNameInput from "./ControlledNameInput";
import UncontrolledNameInput from "./UncontrolledNameInput";

function App() {
  const [name, setName] = useState("Workplace Solutions");

  return (
    <div>
      <ControlledNameInput name={name} onChange={setName} />
      <UncontrolledNameInput defaultName={name} onChange={setName} />
      <p>Vollständiger Name: {name}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
