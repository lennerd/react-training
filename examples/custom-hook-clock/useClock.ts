import React from "react";

export default function useClock(timeZoneOffset = 0): Date {
  const [date, setDate] = React.useState(() => new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours() + timeZoneOffset);

      setDate(date);
    });

    return () => {
      clearInterval(interval);
    };
  }, [timeZoneOffset]);

  return date;
}
