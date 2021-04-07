import React from "react";
import ReactDOM from "react-dom";

function tick() {
  const element = (
    <div>
      <h1>Hallo WPS!</h1>
      <strong>Es ist {new Date().toLocaleTimeString()}.</strong>
    </div>
  );

  console.log("Render clock …");

  ReactDOM.render(element, document.getElementById("root"));
}

tick(); // Initiale Anzeige

// Führ tick jede Sekunde aus.
setInterval(tick, 1000);

// Watch Dev-Tools! Nur der Inhalt des strong-HTML-Element wird neu gerendert,
// obwohl die Tick-Funktion jedes Mal den gesamten HTML-Baum neu rendert.
