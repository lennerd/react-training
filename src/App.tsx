import React from "react";
import { Deck, FlexBox, Slide } from "spectacle";
import ReactTrainingExample from "./components/ReactTrainingExample";
import Preface from "./slides/Preface";
import theme from "./theme";

function App() {
  return (
    <Deck theme={theme}>
      <Preface />
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"jsx-1"} />
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
