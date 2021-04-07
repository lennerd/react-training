import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";

interface NameInputProps {
  name: string;
  onChange(name: string): void;
}

// Controlled Component
function NameInput({ name, onChange }: NameInputProps) {
  const [firstName, lastName] = name.replace(/\s+/, " ").split(" ", 2);

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(`${event.target.value} ${lastName}`);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(`${firstName} ${event.target.value}`);
  };

  return (
    <>
      <p>
        <label htmlFor="first-name">Vorname:</label>
        <br />
        {/* Input is a controlled component. */}
        <input
          id="first-name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </p>
      <p>
        <label htmlFor="name">Nachname:</label>
        <br />
        {/* Input is a controlled component. */}
        <input
          id="name"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </p>
    </>
  );
}

// Uncontrolled Component
function App() {
  const [name, setName] = useState("Workplace Solutions");

  return (
    <div>
      <NameInput name={name} onChange={setName} />
      <p>Vollständiger Name: {name}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));