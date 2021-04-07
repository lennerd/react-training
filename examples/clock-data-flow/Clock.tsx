import React, { useEffect, useState } from "react";

interface ClockProps {
  timeZoneOffset?: number;
}

export default function Clock({ timeZoneOffset = 0 }: ClockProps) {
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
