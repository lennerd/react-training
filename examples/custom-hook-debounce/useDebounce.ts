import React from "react";

export default function useDebounce<T>(value: T, wait: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(
    // Initial, start value
    value
  );

  React.useEffect(() => {
    const timeoutRef = setTimeout(
      () => {
        setDebouncedValue(value);
      },
      // Wait for specified milliseconds to set value
      wait
    );

    return () => {
      // Clear timeout if component is destroyed or …
      clearTimeout(timeoutRef);
    };
  }, [
    // … either value or wait changes.
    value,
    wait,
  ]);

  return debouncedValue;
}
