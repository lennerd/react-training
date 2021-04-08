import styled from "@emotion/styled";
import React from "react";

const TimeZoneOffsetWrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: lightsteelblue;
  align-items: center;
  border-radius: 0.75rem;

  & > * + * {
    margin-left: 1rem;
  }
`;

const TimeZoneOffsetButton = styled.button`
  font: inherit;
  appearance: none;
  border: 0;
  background-color: darkblue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

interface TimeZoneOffsetProps {
  timeZoneOffset: number;
  onTimeZoneOffsetChange(timeZoneOffset: number): void;
}

export default function TimeZoneOffset({
  timeZoneOffset,
  onTimeZoneOffsetChange
}: TimeZoneOffsetProps) {
  const increaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange(timeZoneOffset + 1);
  };

  const decreaseTimeZoneOffset = () => {
    onTimeZoneOffsetChange(timeZoneOffset - 1);
  };

  return (
    <TimeZoneOffsetWrapper>
      <TimeZoneOffsetButton onClick={increaseTimeZoneOffset}>
        +
      </TimeZoneOffsetButton>
      <div>Zeitzone-Offset: {timeZoneOffset}</div>
      <TimeZoneOffsetButton onClick={decreaseTimeZoneOffset}>
        &ndash;
      </TimeZoneOffsetButton>
    </TimeZoneOffsetWrapper>
  );
}
