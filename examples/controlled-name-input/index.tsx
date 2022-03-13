import React from "react";
import ReactDOM from "react-dom";
import ControlledNameInput from "./ControlledNameInput";
import UncontrolledNameInput from "./UncontrolledNameInput";

function App() {
  const [name, setName] = React.useState("Workplace Solutions");

  return (
    <div>
      <ControlledNameInput name={name} onChange={setName} />
      <UncontrolledNameInput defaultName={name} onChange={setName} />
      <p>Vollständiger Name: {name}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
