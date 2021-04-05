import React from "react";
import { Deck, FlexBox, Slide } from "spectacle";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";
import Jsx from "./slides/Jsx";
import Preface from "./slides/Preface";
import Welcome from "./slides/Welcome";
import theme from "./theme";

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
      <Slide>
        <FlexBox height="100%">
          <ReactLogo src={logo} />
        </FlexBox>
      </Slide>
      <Welcome />
      <Preface />
      <Jsx />
    </Deck>
  );
}

export default App;
