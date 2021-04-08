import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";

interface ControlledNameInputProps {
  name: string;
  onChange(name: string): void;
}

function ControlledNameInput({ name, onChange }: ControlledNameInputProps) {
  const [firstName, lastName] = name.replace(/\s+/, " ").split(" ", 2);

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(`${event.target.value} ${lastName}`);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(`${firstName} ${event.target.value}`);
  };

  return (
    <fieldset>
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
    </fieldset>
  );
}

interface UncontrolledNameInputProps {
  defaultName: string;
  onChange(name: string): void;
}

function UncontrolledNameInput({
  defaultName,
  onChange
}: UncontrolledNameInputProps) {
  const [name, setName] = useState(defaultName);
  const [firstName, lastName] = name.replace(/\s+/, " ").split(" ", 2);

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = `${event.target.value} ${lastName}`;

    setName(name);
    onChange(name);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = `${firstName} ${event.target.value}`;

    setName(name);
    onChange(name);
  };

  return (
    <fieldset>
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
    </fieldset>
  );
}

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
