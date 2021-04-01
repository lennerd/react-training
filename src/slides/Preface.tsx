import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";

export default function Preface() {
  return (
    <>
      <Slide>
        <FlexBox
          // @ts-ignore
          alignItems={"center"}
          height="100%"
        >
          <Heading>React Einführung</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          // @ts-ignore
          alignItems={"center"}
          flexDirection={"column"}
          height="100%"
        >
          <Heading fontSize="h2">React</Heading>
          <Text textAlign="center">
            A JavaScript library for building user interfaces
          </Text>
          <Text textAlign="center">
            <Link href="https://reactjs.org/" target="_blank">
              reactjs.org
            </Link>
          </Text>
        </FlexBox>
      </Slide>
    </>
  );
}
