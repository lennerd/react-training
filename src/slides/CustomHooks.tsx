import React from "react";
import { FlexBox, Heading, Slide } from "spectacle";
import CodePane from "../components/CodePane";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function CustomHooks() {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h3" lineHeight={2} color="quaternary">
            Custom Hooks
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" lineHeight={2} color="quaternary">
            Custom Hooks? 🤔
          </Heading>
          <CodePane>
            {`function Clock({ timeZoneOffset = 0 }: ClockProps) {
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
}`}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"custom-hook-clock"}
            module="/App.tsx"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"custom-hook-window-size"}
            module="/App.tsx"
          />
        </FlexBox>
      </Slide>
    </>
  );
}
