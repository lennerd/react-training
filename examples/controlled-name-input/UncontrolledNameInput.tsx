import React from "react";

interface UncontrolledNameInputProps {
  defaultName: string;
  onChange(name: string): void;
}

export default function UncontrolledNameInput({
  defaultName,
  onChange,
}: UncontrolledNameInputProps) {
  const [name, setName] = React.useState(defaultName);
  const [firstName, lastName] = name.replace(/\s+/, " ").split(" ", 2);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = `${event.target.value} ${lastName}`;

    setName(name);
    onChange(name);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
