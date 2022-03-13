import React from "react";
import Clock from "./Clock";
import TimeZoneOffset from "./TimeZoneOffset";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = React.useState(0);

  return (
    <div>
      <h1>Hallo WPS!</h1>
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />
      <Clock timeZoneOffset={timeZoneOffset} />
    </div>
  );
}
