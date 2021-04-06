import React from "react";
import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function Clock() {
  return (
    <>
      <Slide>
        <Heading fontSize="h4">
          JavaScript-Exkurs: destructuring assignment
        </Heading>
        <CodePane
          // @ts-ignore
          language="tsx"
          highlightRanges={[
            // @ts-ignore
            [1, 2],
            // @ts-ignore
            [4, 5],
            // @ts-ignore
            [7, 11],
          ]}
          theme="darcula"
        >
          {`
const foo = ['one', 'two', 'three'];
console.log(foo[0], foo[1], foo[2]); // "one", "two", "three"

const bar = [10, 20, 30, 40, 50];
console.log(bar[0], bar[1], bar.slice(2)); // 10, 20, [30, 40, 50]

function deconstruct(options) {
  console.log(options.a, options.b);
}

deconstruct({ a: 10, b: 20 }); // 10, 20
          `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading fontSize="h4">
          JavaScript-Exkurs: destructuring assignment
        </Heading>
        <CodePane
          language="tsx"
          highlightRanges={[
            // @ts-ignore
            [1, 4],
            // @ts-ignore
            [6, 7],
            // @ts-ignore
            [9, 13],
          ]}
          theme="darcula"
        >
          {`
const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;

console.log(one, two, three); // "one", "two", "three"

const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest); // 10, 20, [30, 40, 50]

function deconstruct({ a, b }) {
  console.log(a, b);
}

deconstruct({ a: 10, b: 20 }); // 10, 20
          `}
        </CodePane>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          // @ts-ignore
          flexDirection="column"
        >
          <Heading fontSize="h3">Komponenten</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          // @ts-ignore
          flexDirection="column"
        >
          <Heading fontSize="h4">Komponente in React</Heading>
          <Text textAlign="center">
            Unabhängige, wiederverwendbare UI-Bausteine
          </Text>
          <Text textAlign="center">
            <Box mb={1}>Wie JavaScript-Funktionen:</Box>
            <Box>
              <CodeSpan>fn(props) =&gt; UI</CodeSpan>{" "}
            </Box>
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-tick"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-component"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-hooks"} />
        </FlexBox>
      </Slide>
    </>
  );
}
