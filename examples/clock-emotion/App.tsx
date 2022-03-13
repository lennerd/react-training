import React from "react";
import Clock from "./Clock";
import TimeZoneOffset from "./TimeZoneOffset";
import styled from "@emotion/styled";

const AppWrapper = styled.div`
  padding: 0.75rem 1rem;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > * + * {
    margin-top: 1rem;
  }
`;

const AppHeadline = styled.div`
  color: orangered;
  margin: 0;
  text-align: center;
`;

export default function App() {
  const [timeZoneOffset, setTimeZoneOffset] = React.useState(0);

  return (
    <AppWrapper>
      <AppHeadline>Hallo WPS!</AppHeadline>
      <Clock timeZoneOffset={timeZoneOffset} />
      <TimeZoneOffset
        timeZoneOffset={timeZoneOffset}
        onTimeZoneOffsetChange={setTimeZoneOffset}
      />
    </AppWrapper>
  );
}
