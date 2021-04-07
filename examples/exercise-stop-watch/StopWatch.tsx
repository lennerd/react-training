import React, { useEffect, useState } from "react";
import formatNumber from "./formatNumber";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    // setInterval() is not guaranteed to run exactly as scheduled.
    // Delays due to CPU load, other tasks, etc, are to be expected.
    // Use Date.now() to calculate elapsed time since last interval
    // manually.
    let lastTime = Date.now();

    const interval = setInterval(() => {
      const nextTime = Date.now();

      // Using the callback syntax when updating state allows us
      // to use the elapsed time without reinitializing the effect
      // through the effect hook dependencies.
      setElapsed((elapsed) => elapsed + nextTime - lastTime);
      lastTime = nextTime;
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const toggleStopWatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopWatch = () => {
    setIsRunning(false);
    setElapsed(0);
  };

  return (
    <>
      <p>
        <button onClick={toggleStopWatch}>
          {isRunning ? "Stop" : "Start"}
        </button>{" "}
        <button onClick={resetStopWatch} disabled={elapsed === 0}>
          Zurücksetzen
        </button>
      </p>
      <div>
        Abgelaufende Zeit (in Sekunden): {formatNumber(elapsed / 1000)}.
      </div>
    </>
  );
}
