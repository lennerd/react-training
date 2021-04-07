import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface ClockProps {
  timeZoneOffset?: number;
}

function Clock({ timeZoneOffset = 0 }: ClockProps) {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours() + timeZoneOffset);

      setDate(date);
    });

    return () => {
      clearInterval(interval);
    };
  }, [timeZoneOffset]);

  return <strong>Es ist {date.toLocaleTimeString()}.</strong>;
}

const element = (
  <div>
    <h1>Hallo WPS!</h1>
    <Clock />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
