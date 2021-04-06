import React from "react";
import ReactDOM from "react-dom";

function Clock() {
  // State-Hook mit initialem State-Wert
  const [date, setDate] = React.useState(() => new Date());

  // Effect-Hook mit Effect-Callback
  React.useEffect(
    () => {
      // After mount/init …
      const interval = setInterval(() => {
        setDate(new Date());
      });

      return () => {
        // Before unmount/destroy …
        clearInterval(interval);
      };
    },
    // Effect-Abhängigkeiten
    []
  );

  return <strong>Es ist {date.toLocaleTimeString()}.</strong>;
}

const element = (
  <div>
    <h1>Hallo WPS!</h1>
    <Clock />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
