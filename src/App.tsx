import React from "react";
import { Deck, FlexBox, Slide } from "spectacle";
import ReactTrainingExample from "./components/ReactTrainingExample";

function App() {
  return (
    <Deck>
      <Slide>
        <FlexBox className="h-full">
          <ReactTrainingExample example={"jsx-1"} />
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
