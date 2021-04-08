import React from "react";
import ReactDOM from "react-dom";

interface ClockProps {
  date: Date;
}

function Clock({ date }: ClockProps) {
  return <strong>Es ist {date.toLocaleTimeString()}.</strong>;
}

function tick() {
  const element = (
    <div>
      <h1>Hallo WPS!</h1>
      <Clock date={new Date()} />
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
}

tick();
setInterval(tick, 1000);

// Watch ReactDevTools!
