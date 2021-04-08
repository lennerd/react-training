import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function ExerciseTourOfHeroesPartTwo() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">Tour of Heroes Part 2</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">3. Aufgabe</Heading>

          <Heading fontSize="h4" color="quaternary">
            🦸‍♂️ Tour of Heroes 🦸‍♀️
          </Heading>

          <Text fontSize="h5" textAlign="center" lineHeight={2}>
            <strong>Idee:</strong> Superhelden-App
            <br />
            (beste, schwächste Helden, Helden vs. Bösewichte, …)
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
            ReactQuery, react-hook-form, …?
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"exercise-tour-of-heroes"} />
        </FlexBox>
      </Slide>
    </>
  );
}
