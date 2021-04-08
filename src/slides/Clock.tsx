import React from "react";
import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function Clock() {
  return (
    <>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading fontSize="h4">
            JavaScript-Exkurs: destructuring assignment
          </Heading>
          <CodePane
            highlightRanges={[
              [1, 2],
              [4, 5],
              [7, 11],
            ]}
          >
            {`
const foo = ['one', 'two', 'three'];
console.log(foo[0], foo[1], foo[2]); // "one", "two", "three"

const bar = [10, 20, 30, 40, 50];
console.log(bar[0], bar[1], bar.slice(2)); // 10, 20, [30, 40, 50]

function deconstruct(options) {
  console.log(options.a, options.b);
}

deconstruct({ a: 10, b: 20 }); // 10, 20
          `}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading fontSize="h4">
            JavaScript-Exkurs: destructuring assignment
          </Heading>
          <CodePane
            highlightRanges={[
              [1, 4],
              [6, 7],
              [9, 13],
            ]}
          >
            {`
const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;

console.log(one, two, three); // "one", "two", "three"

const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest); // 10, 20, [30, 40, 50]

function deconstruct({ a, b }) {
  console.log(a, b);
}

deconstruct({ a: 10, b: 20 }); // 10, 20
          `}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h3">Clock-Komponente</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-tick"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          // @ts-ignore
          flexDirection="column"
        >
          <Heading fontSize="h4">Komponente in React</Heading>
          <Text textAlign="center">
            Unabhängige, wiederverwendbare UI-Bausteine
          </Text>
          <Text textAlign="center">
            <CodeSpan>fn(props) =&gt; UI</CodeSpan>
          </Text>
          <Text textAlign="center">
            Beginnen mit Großbuchstaben (<CodeSpan>div</CodeSpan> vs.{" "}
            <CodeSpan>Clock</CodeSpan>)
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-component"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">Wiederverwendbare Komponenten?</Heading>
          <Text textAlign="center">
            <CodeSpan>setInterval</CodeSpan> und <CodeSpan>date</CodeSpan> sind
            Details der Implementierung
          </Text>
          <Text textAlign="center">
            Datum: <strong>State</strong> der Komponente
          </Text>
          <Text textAlign="center">
            Interval: <strong>Effekt</strong>, der Datum-State aktualisiert
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">
            <CodeSpan>useState</CodeSpan>-Hook
          </Heading>
          <Box mb={2}>
            <CodePane>
              {`
const [state, setState] = useState(defaultValue);
          `}
            </CodePane>
          </Box>
          <CodePane highlightRanges={[2, 6, 7]}>
            {`
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
          `}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading fontSize="h4">Angular vs. React: Change Detection</Heading>
          <Text textAlign="center">
            <strong>Angular:</strong> <CodeSpan>NgZone</CodeSpan>,
            Monkey-Patching asynchroner Funktionen (DOM-Events, Outputs,
            Promises, Observables, …), implizit
          </Text>
          <Text textAlign="center">
            <strong>React:</strong> <CodeSpan>useState</CodeSpan>-Hook, explizit
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-use-state"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column">
          <Heading fontSize="h4">
            <CodeSpan>useEffect</CodeSpan>-Hook
          </Heading>
          <FlexBox>
            <Box mr={2}>
              <CodePane>
                {`
useEffect(() => {
  // Komponente wurde in DOM eingehängt
  
  return () => {
    // Komponente wird aus DOM entfernt
  };
}, [
  // Effekt nur ausführen, wenn sich
  // die Abhängigkeit verändert hat
  dependency
]);
          `}
              </CodePane>
            </Box>
            <CodePane highlightRanges={[[4, 14], 9, 12]}>
              {`
function OnlineStatus({ friendId }) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    }
  
    FriendAPI.subscribe(friendId, handleStatusChange);
    
    return () => {
      FriendAPI.unsubscribe(friendId, handleStatusChange);
    }
  }, [friendId]);
  
  return (
    <div>{isOnline ? 'online' : 'offline'}</div>
  );
}
          `}
            </CodePane>
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-use-effect"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            Kommunikation zwischen Komponenten
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading fontSize="h4">
            Angular vs. React:
            <br />
            Kommunikation zwischen Komponente
          </Heading>
          <Text textAlign="center">
            <strong>Angular:</strong> <CodeSpan>@Input</CodeSpan>,{" "}
            <CodeSpan>@Output</CodeSpan>
          </Text>
          <Text textAlign="center">
            <strong>React:</strong> <CodeSpan>props</CodeSpan> (Wertübergabe,
            <br />
            Rückgabe von Werten über Callbacks)
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-timezone"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"clock-timezone-input"}
            module="/App.tsx"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-data-flow"} module="/App.tsx" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="quaternary">
            Styling von Komponenten
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"clock-css-modules"}
            module="/App.tsx"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"clock-emotion"} module="/App.tsx" />
        </FlexBox>
      </Slide>
    </>
  );
}
