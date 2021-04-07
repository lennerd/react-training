import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function ExerciseStopWatch() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">Selber ausprobieren!</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">Create React App</Heading>

          <Text fontSize="h5" lineHeight={2}>
            <CodeSpan>
              npx create-react-app tour-of-heroes --template typescript
              <br />
              cd tour-of-heroes
              <br />
              npm start
            </CodeSpan>
          </Text>

          <Text>
            <Link href="https://create-react-app.dev/" target="_blank">
              create-react-app.dev
            </Link>
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">1. Aufgabenstellung</Heading>

          <Text fontSize="h5">Installieren, nachbauen, rumprobieren!</Text>

          <Text fontSize="h5" textAlign="center" lineHeight={2}>
            <strong>Idee:</strong> Eigene Stoppuhr-Komponente bauen!
            <br />
            Was ihr dafür braucht: <br />
            <CodeSpan>
              ReactDOM.render
            </CodeSpan> <CodeSpan>useState</CodeSpan>{" "}
            <CodeSpan>useEffect</CodeSpan>
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"exercise-stop-watch"} />
        </FlexBox>
      </Slide>
    </>
  );
}
