import React, { useState } from "react";
import TimeZoneOffset from "./TimeZoneOffset";
import useClock from "./useClock";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = useState(0);
  const dateWithOffset = useClock(timeZoneOffset);
  const date = useClock();

  return (
    <div>
      <h1>Hallo WPS!</h1>
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />

      <p>Es ist {date.toLocaleTimeString()} Uhr.</p>
      <p>(Ohne Zeitzonen-Offset: {dateWithOffset.toLocaleTimeString()} Uhr)</p>
    </div>
  );
}
