import React from "react";
import { FlexBox, Heading, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function Jsx() {
  return (
    <>
      <Slide>
        <FlexBox
          height="100%"
          // @ts-ignore
          flexDirection="column"
        >
          <Heading fontSize="h3" color="quaternary">
            JSX
          </Heading>
          <Text textAlign="center">JavaScript Syntax Extension</Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">
            <del>JSX</del> TSX
          </Heading>
          <CodePane highlightRanges={[[5, 10], 7, 8]}>
            {`// index.tsx <- Watchout for file ending tsx

const wps = true;

const element = (
  <div>
    {wps && <h1>Hallo WPS!</h1>}
    <strong>Heute ist der {new Date().toLocaleDateString()}</strong>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));`}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-hello-world"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-variable"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-function-1"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-function-2"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-loop"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-element"} />
        </FlexBox>
      </Slide>
    </>
  );
}
