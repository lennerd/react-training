import React from "react";

interface TimeZoneOffsetProps {
  timeZoneOffset: number;
  onTimeZoneOffsetChange(timeZoneOffset: number): void;
}

export default function TimeZoneOffset({
  timeZoneOffset,
  onTimeZoneOffsetChange
}: TimeZoneOffsetProps) {
  const increaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange((timeZoneOffset + 1) % 24);
  };

  const decreaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange((timeZoneOffset - 1) % 24);
  };

  return (
    <div>
      <div>Aktuelles Zeitzone-Offset: {timeZoneOffset}</div>
      <button onClick={increaseTimeZoneOffset}>Zeitzone-Offset erhöhen</button>
      <button onClick={decreaseTimeZoneOffset}>
        Zeitzone-Offset verringern
      </button>
    </div>
  );
}
