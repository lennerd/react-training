import React from "react";
import { FlexBox, Heading, Slide } from "spectacle";
import CodePane from "../components/CodePane";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function ReactQuery() {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h3" lineHeight={2} color="quaternary">
            Frontend-Server-Kommunikation
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" lineHeight={2} color="quaternary">
            JavaScript-Exkurs: <CodeSpan>fetch</CodeSpan>,{" "}
            <CodeSpan>Promise</CodeSpan>, <CodeSpan>async/await</CodeSpan>
          </Heading>
          <CodePane highlightRanges={[2, [4, 6], 8, [11, 13]]}>{`
async function getHeroes(): Promise<Hero[]> {
  const res = await fetch('/api/heroes');
  
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  
  return await res.json(); // Await can be omitted
}

getHeroes()
  .then(console.log) // Logs list of heroes
  .catch(console.error) // Logs error (status code or invalid JSON)
        `}</CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"heroes-promise-hook"} />
        </FlexBox>
      </Slide>
    </>
  );
}
