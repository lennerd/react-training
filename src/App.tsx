import React from "react";
import { Deck, FlexBox, Heading, Slide } from "spectacle";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import logo from "./logo.svg";
import Clock from "./slides/Clock";
import CustomHooks from "./slides/CustomHooks";
import ExerciseStopWatch from "./slides/ExerciseStopWatch";
import Jsx from "./slides/Jsx";
import JsxButWhy from "./slides/JsxButWhy";
import Preface from "./slides/Preface";
import ReactQuery from "./slides/ReactQuery";
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
    </Deck>
  );
}

export default App;
