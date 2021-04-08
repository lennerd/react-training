import React from "react";
import { Appear, FlexBox, Heading, Image, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import danReactValueUi from "./assets/dan-react-value-ui.jpg";

export default function JsxButWhy() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">JSX … 🤮</Heading>
          <Appear>
            <Text textAlign="center" lineHeight={2}>
              Rendering logic and UI logic in one file?
              <br />
              Bad separation of concerns??
            </Text>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            Separation concerns:
          </Heading>
          <Text textAlign="center" lineHeight={2}>
            reduce coupling,
            <br />
            increase cohesion.
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            Rendering-Logik and UI-Logik sind stark kohäsiv:
          </Heading>
          <Text textAlign="center" lineHeight={2}>
            Event-Handling,
            <br />
            Zustands-Änderungen über die Zeit,
            <br />
            Datenvorbereitung für Darstellung.
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            JSX & React-Komponenten:
          </Heading>
          <Text textAlign="center" lineHeight={2}>
            stark kohäsive UI-Bausteine
            <br />
            lose gekoppelt mit anderen Komponenten
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">JSX … 🤢</Heading>
          <Appear>
            <Text textAlign="center" lineHeight={2}>
              Neue Template-Sprache lernen??
            </Text>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            JSX: JavaScript-Erweiterung
          </Heading>
          <Text textAlign="center" lineHeight={2}>
            Zugänglichkeit von Templates
            <br />
            ohne neu zu lernende Abstraktion!
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane highlightRanges={[8, [10, 14]]}>
            {`import Unterlage from './Unterlage';

const norddeutsch = true;
const unterlagen = ['react-intro.pdf', 'test.pdf'];

const element = (
  <div>
    {norddeutsch ? <h1>Moin!</h1> : <h1>Hallo!</h1>}
    <ul>
      {unterlagen.map((unterlage) => (
        <li key={unterlage}>
          <Unterlage unterlage={unterlage} />
        </li>
      ))}
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));`}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Image width="50%" src={danReactValueUi} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading
            fontSize="h4"
            color="quaternary"
            opacity={0.2}
            lineHeight={1.5}
          >
            TODO
            <br />
            “Inversion of Control ist sau elegant in React”
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            React-Komponenten & JSX … 🤯 🤩
          </Heading>
        </FlexBox>
      </Slide>
    </>
  );
}
