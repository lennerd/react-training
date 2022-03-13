import React from "react";

interface ClockProps {
  timeZoneOffset?: number;
}

export default function Clock({ timeZoneOffset = 0 }: ClockProps) {
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

  return <strong>Es ist {date.toLocaleTimeString()}.</strong>;
}
