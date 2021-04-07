import React from "react";
import usePromise from "./usePromise";

export default function App() {
  const { data } = usePromise(
    () =>
      new Promise<{ time: number }>((resolve) => {
        setTimeout(() => resolve({ time: Date.now() }), 2000);
      }),
    []
  );

  return <div>{data == null ? "Lädt …" : `Zeitstempel: ${data.time}`}</div>;
}
