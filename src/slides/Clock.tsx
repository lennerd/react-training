import React from "react";
import { FlexBox, Heading, Slide, Text } from "spectacle";
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
            Unabh??ngige, wiederverwendbare UI-Bausteine
          </Text>
          <Text textAlign="center">
            <CodeSpan>fn(props) =&gt; UI</CodeSpan>
          </Text>
          <Text textAlign="center">
            Beginnen mit Gro??buchstaben (<CodeSpan>div</CodeSpan> vs.{" "}
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
            Datum: <strong>Zustand</strong> der Komponente
          </Text>
          <Text textAlign="center">
            Interval: <strong>Effekt</strong>, der Datum-State aktualisiert
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">Zustand in einer Komponente</Heading>
          <Text textAlign="center">Wie implementieren wir Zustand?</Text>
          <Text textAlign="center">
            Wie haben ja nur Funktionen als Komponenten. Und Funktionen haben
            (im Gegensatz zu Klassen) keinen Zustand.
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">
            <CodeSpan>useState</CodeSpan>-Hook
          </Heading>
          <CodePane>
            {`
const [state, setState] = React.useState(defaultValue);
          `}
          </CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">
            <CodeSpan>useState</CodeSpan>-Hook
          </Heading>
          <CodePane highlightRanges={[2, 6, 7]}>
            {`
function Counter() {
  const [count, setCount] = React.useState(0);

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
          <Heading fontSize="h4">
            Angular vs. React: Zustands??nderungen erkennen
          </Heading>
          <Text textAlign="center">
            <strong>Angular:</strong> <CodeSpan>NgZone</CodeSpan>,
            Monkey-Patching asynchroner Funktionen (DOM-Events, Outputs,
            Promises, Observables, ???), implizit
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
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4">Seiteneffekte in einer Komponente</Heading>
          <Text textAlign="center">
            Wie bringen wir die Clock-Komponente dazu, sich zu aktualisieren?
          </Text>
          <Text textAlign="center">
            Wie registriere ich so etwas wie einen regelm????igen Intervall? Wie
            stelle ich sicher, dass dieser Intervall nur solange l??uft, wie auch
            die Komponente im HTML-DOM eingeh??ngt ist?
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading fontSize="h4">
            <CodeSpan>useEffect</CodeSpan>-Hook
          </Heading>
          <FlexBox>
            <CodePane>
              {`
React.useEffect(() => {
  // Effekt initialisieren
  console.log('component has mounted');
  console.log('dependency has changed');
  
  return () => {
    // Effekt beenden
    console.log('component gets destroyed');
    console.log('dependency has changed');
  };
}, [
  // Effekt nur ausf??hren, wenn sich
  // die Abh??ngigkeit ver??ndert hat
  dependency
]);
          `}
            </CodePane>
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column">
          <Heading fontSize="h4">
            <CodeSpan>useEffect</CodeSpan>-Hook
          </Heading>
          <FlexBox>
            <CodePane highlightRanges={[[4, 17], 11, 15, 17]}>
              {`
function OnlineStatus({ friendId }) {
  const [isOnline, setIsOnline] = React.useState(false);

  React.useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    }
  
    // Component mounted or friend ID was changed:
    // Subscribe to friend status
    FriendAPI.subscribe(friendId, handleStatusChange);
    
    return () => {
      // Unsubscribe from friend status 
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
            <strong>React:</strong> <CodeSpan>props</CodeSpan> (Wert??bergabe,
            <br />
            R??ckgabe von Werten ??ber Callbacks)
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
