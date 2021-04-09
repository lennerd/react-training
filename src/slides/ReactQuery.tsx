import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import CodeSpan from "../components/CodeSpan";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function ReactQuery() {
  return (
    <>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading fontSize="h4">
            Angular vs. React: Framework vs. Library
          </Heading>
          <Text textAlign="center">
            <strong>Angular:</strong> Framework inkl. HttpClient, Routing,
            Formulare, …
          </Text>
          <Text textAlign="center">
            <strong>React:</strong> Library mit Fokus auf UI/View-Rendering
          </Text>
          <Text textAlign="center" color="quaternary">
            Qual der Wahl vs. Lernkurve
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h3" lineHeight={2} color="quaternary">
            Frontend-Server-Kommunikation
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" lineHeight={2} color="quaternary">
            JavaScript-Exkurs: <CodeSpan>fetch</CodeSpan>,{" "}
            <CodeSpan>Promise</CodeSpan>, <CodeSpan>async/await</CodeSpan>
          </Heading>
          <CodePane highlightRanges={[2, [4, 6], 8, [11, 13]]}>{`
async function getHeroes(): Promise<Hero[]> {
  const res = await fetch('/api/heroes');
  
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  
  return await res.json(); // Await can be omitted
}

getHeroes()
  .then(console.log) // Logs list of heroes
  .catch(console.error) // Logs error (status code or invalid JSON)
        `}</CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"heroes-promise-hook"}
            module="/App.tsx"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" lineHeight={1} color="secondary">
            ReactQuery
          </Heading>
          <Text textAlign="center" lineHeight={1.5}>
            <Link href="https://react-query.tanstack.com/" target="_blank">
              react-query.tanstack.com
            </Link>
          </Text>
          <Text textAlign="center" lineHeight={1.5}>
            Mächtige Bibliothek für die
            <br />
            Synchronisation von Daten mit React
          </Text>
          <Text textAlign="center" lineHeight={1.5}>
            Auto Refetching, Auto Caching, Polling/Realtime Queries,
            <br />
            Window Focus Refetching, Prefetching, Request Cancellation,
            <br />
            Dedicated Devtools, …
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="secondary">
            ReactQuery-API
          </Heading>
          <CodePane highlightRanges={[6, [7, 12]]}>{`
import { useQueryClient, useQuery, useMutation } from 'react-query'
import { getHeroes, postHero } from './api'; 

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery('heroes', getHeroes);
  const { mutate } = useMutation(postHero, {
    onSuccess: () => {
      // Invalidate and refetch heroes query
      queryClient.invalidateQueries('heroes');
    },
  }));

  // Render heroes …
}
 `}</CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"heroes-react-query"}
            module="/HeroLister.tsx"
          />
        </FlexBox>
      </Slide>
    </>
  );
}
