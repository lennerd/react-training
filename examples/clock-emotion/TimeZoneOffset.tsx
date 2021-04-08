import React from "react";
import styles from "./TimeZoneOffset.module.css";

interface TimeZoneOffsetProps {
  timeZoneOffset: number;
  onTimeZoneOffsetChange(timeZoneOffset: number): void;
}

export default function TimeZoneOffset({
  timeZoneOffset,
  onTimeZoneOffsetChange
}: TimeZoneOffsetProps) {
  const increaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange(timeZoneOffset + 1);
  };

  const decreaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange(timeZoneOffset - 1);
  };

  return (
    <div className={styles.TimeZoneOffset}>
      <button
        className={styles.TimeZoneOffsetButton}
        onClick={increaseTimeZoneOffset}
      >
        +
      </button>
      <div>Zeitzone-Offset: {timeZoneOffset}</div>
      <button
        className={styles.TimeZoneOffsetButton}
        onClick={decreaseTimeZoneOffset}
      >
        &ndash;
      </button>
    </div>
  );
}
