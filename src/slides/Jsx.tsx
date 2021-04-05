import React from "react";
import { FlexBox, Heading, Slide, Text } from "spectacle";
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
          <ReactTrainingExample example={"jsx-element"} />
        </FlexBox>
      </Slide>
    </>
  );
}
