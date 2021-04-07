import React, { useState } from "react";
import Clock from "./Clock";
import TimeZoneOffset from "./TimeZoneOffset";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = useState(0);

  return (
    <div>
      <h1>Hallo WPS!</h1>
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />
      <Clock />
    </div>
  );
}
