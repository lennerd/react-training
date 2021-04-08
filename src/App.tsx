import React from "react";
import { Deck, FlexBox, Heading, Slide, Text } from "spectacle";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import logo from "./logo.svg";
import Clock from "./slides/Clock";
import CustomHooks from "./slides/CustomHooks";
import ExerciseStopWatch from "./slides/ExerciseStopWatch";
import ExerciseTourOfHeroesPartOne from "./slides/ExerciseTourOfHeroesPartOne";
import ExerciseTourOfHeroesPartTwo from "./slides/ExerciseTourOfHeroesPartTwo";
import Forms from "./slides/Forms";
import Jsx from "./slides/Jsx";
import JsxButWhy from "./slides/JsxButWhy";
import Preface from "./slides/Preface";
import ReactQuery from "./slides/ReactQuery";
import ReactRouter from "./slides/ReactRouter";
import UncontrolledControlled from "./slides/UncontrolledControlled";
import Welcome from "./slides/Welcome";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "JetBrains Mono";
    font-weight: 400;
    src: url(/fonts/JetBrainsMono-Regular.woff2);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReactLogo = styled.img`
  animation: ${spin} infinite 60s linear;
  width: 50%;
  opacity: 0.1;
`;

function App() {
  return (
    <Deck theme={theme}>
      <GlobalStyle />
      <Slide>
        <FlexBox height="100%">
          <ReactLogo src={logo} />
        </FlexBox>
      </Slide>
      <Welcome />
      <Preface />
      <Jsx />
      <Clock />
      <JsxButWhy />
      <ExerciseStopWatch />
      <Slide>
        <FlexBox height="100%">
          <Heading>🥙 🍱 🍔 🍕</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading>Experten-Nachmittag</Heading>
        </FlexBox>
      </Slide>
      <UncontrolledControlled />
      <CustomHooks />
      <ReactQuery />
      <ExerciseTourOfHeroesPartOne />
      <ReactRouter />
      <Forms />
      <ExerciseTourOfHeroesPartTwo />
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <iframe
            src="https://giphy.com/embed/ioeQEPFDeS8s8"
            width="480"
            height="292"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Computer Kid"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">Und, wie wars?</Heading>

          <Text fontSize="h5">Was hat euch gut gefallen? Was weniger?</Text>

          <Text fontSize="h5">
            Wo fühlt ihr euch gut abgeholt? Wo fehlt euch noch Wissen?
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading color="quaternary">Danke!</Heading>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
