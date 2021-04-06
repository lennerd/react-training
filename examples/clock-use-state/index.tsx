import React, { useState } from "react";
import ReactDOM from "react-dom";

function Clock() {
  // State-Hook mit initialer State-Wert-Factory
  const [date, setDate] = useState(() => new Date());

  console.log("Render clock …");

  // Aber das Datum ändert sich nicht!
  // setDate??
  return <strong>Es ist {date.toLocaleTimeString()}.</strong>;
}

function tick() {
  const element = (
    <div>
      <h1>Hallo WPS!</h1>
      <Clock />
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
tick();
