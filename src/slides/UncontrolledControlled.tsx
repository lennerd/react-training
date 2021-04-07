import React from "react";
import { FlexBox, Heading, Slide, UnorderedList } from "spectacle";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function UncontrolledControlled() {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h3" lineHeight={2} color="quaternary">
            Uncontrolled- vs. Controlled-
            <br />
            Komponenten
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading fontSize="h4" lineHeight={2} color="quaternary">
          Uncontrolled- vs. Controlled-Komponenten
        </Heading>
        <UnorderedList lineHeight={2}>
          <li>
            <strong>Controlled-Komponente:</strong> Leitet ihren aktuellen
            Zustand durch <CodeSpan>props</CodeSpan> ab, teilt
            Zustandsänderungen über Callbacks wie <CodeSpan>onChange</CodeSpan>{" "}
            mit. Wird durch die äußere Komponente gesteuert.
          </li>
          <li>
            <strong>Uncontrolled-Komponente:</strong> hat eigenen State und
            verwendet zur weiteren Darstellung häufig Controlled-Komponenten.
          </li>
        </UnorderedList>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"controlled-input"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"controlled-name-input"} />
        </FlexBox>
      </Slide>
    </>
  );
}
