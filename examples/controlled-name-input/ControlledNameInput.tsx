import { ChangeEvent } from "react";

interface ControlledNameInputProps {
  name: string;
  onChange(name: string): void;
}

export default function ControlledNameInput({
  name,
  onChange
}: ControlledNameInputProps) {
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
