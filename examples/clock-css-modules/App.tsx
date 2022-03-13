import React from "react";
import Clock from "./Clock";
import TimeZoneOffset from "./TimeZoneOffset";
import styles from "./App.module.css";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = React.useState(0);

  return (
    <div className={styles.App}>
      <h1 className={styles.AppHeadline}>Hallo WPS!</h1>
      <Clock timeZoneOffset={timeZoneOffset} />
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />
    </div>
  );
}
