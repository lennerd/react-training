import React from "react";

interface TimeZoneOffsetProps {
  timeZoneOffset: number;
  onTimeZoneOffsetChange(timeZoneOffset: number): void;
}

export default function TimeZoneOffset({
  timeZoneOffset,
  onTimeZoneOffsetChange,
}: TimeZoneOffsetProps) {
  const increaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange(timeZoneOffset + 1);
  };

  const decreaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange(timeZoneOffset - 1);
  };

  return (
    <div>
      <strong>Aktuelles Zeitzone-Offset: {timeZoneOffset}</strong>
      <button onClick={increaseTimeZoneOffset}>Zeitzone-Offset erhöhen</button>
      <button onClick={decreaseTimeZoneOffset}>
        Zeitzone-Offset verringern
      </button>
    </div>
  );
}
