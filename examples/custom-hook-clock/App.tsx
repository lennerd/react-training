import React from "react";
import TimeZoneOffset from "./TimeZoneOffset";
import useClock from "./useClock";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = React.useState(0);
  const dateWithOffset = useClock(timeZoneOffset);
  const date = useClock();

  return (
    <div>
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />

      <p>Es ist {dateWithOffset.toLocaleTimeString()} Uhr.</p>
      <p>(Ohne Zeitzonen-Offset: {date.toLocaleTimeString()} Uhr)</p>
    </div>
  );
}
