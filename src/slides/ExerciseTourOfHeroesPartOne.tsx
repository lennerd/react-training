import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function ExerciseTourOfHeroesPartOne() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">Tour of Heroes Part 1</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">2. Aufgabe</Heading>

          <Heading fontSize="h4" color="quaternary">
            <del>Tour</del> Overview of Heroes
          </Heading>

          <Text fontSize="h5" textAlign="center" lineHeight={2}>
            <strong>Idee:</strong> Helden-Übersicht
            <br />
            Was ihr dafür brauchen könntet:
            <br />
            <Link
              fontSize="h5"
              href="https://akabab.github.io/superhero-api/api/"
              target="_blank"
            >
              akabab.github.io/superhero-api/api
            </Link>
            <br />
            ReactQuery‘s <CodeSpan>useQuery</CodeSpan>- und eigene Custom-Hooks?
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"heroes-react-query"}
            module="/HeroLister.tsx"
            view="preview"
            runOnClick={false}
          />
        </FlexBox>
      </Slide>
    </>
  );
}
