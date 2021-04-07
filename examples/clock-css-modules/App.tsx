import React, { useState } from "react";
import Clock from "./Clock";
import TimeZoneOffset from "./TimeZoneOffset";
import styles from "./App.module.css";

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = useState(0);

  return (
    <div className={styles.App}>
      <h1>Hallo WPS!</h1>
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />
      <Clock />
    </div>
  );
}
