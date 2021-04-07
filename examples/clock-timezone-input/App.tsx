import React, { ChangeEvent, useState } from "react";
import Clock from "./Clock";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = useState(0);

  const handleTimeZoneOffsetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeZoneOffset(Number(event.target.value) % 24);
  };

  return (
    <div>
      <h1>Hallo WPS!</h1>
      <div>
        <label htmlFor="timeZoneOffset">Zeitzonen-Offset</label>
        <input
          id="timeZoneOffset"
          type="number"
          value={timeZoneOffset}
          onChange={handleTimeZoneOffsetChange}
        />
      </div>
      <Clock timeZoneOffset={timeZoneOffset} />
    </div>
  );
}
