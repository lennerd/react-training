import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function ReactRouter() {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h3" lineHeight={2} color="quaternary">
            Routing
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" lineHeight={2} color="secondary">
            ReactRouter
          </Heading>
          <Text textAlign="center" lineHeight={1.5}>
            <Link href="https://reactrouter.com/" target="_blank">
              reactrouter.com
            </Link>
          </Text>
          <Text textAlign="center" lineHeight={1.5}>
            Routing direkt innerhalb der Komponenten-Baum-Struktur
          </Text>
          <Text textAlign="center" lineHeight={1.5}>
            Quasi Standard für Routing in React
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="secondary">
            ReactRouter-API
          </Heading>
          <CodePane
            highlightRanges={[
              [6, 7],
              [9, 16],
              [10, 15],
            ]}
          >{`
import { BrowserRouter, Link, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      <Routes>
        <Route path="/heroes" element={<HeroLister />} />
        <Route path="/heroes/:slug">
          <Route path="" element={<HeroViewer />} />
          <Route path="edit" element={<HeroEditor />} />
        </Route>
        <Route path="/" element={<Navigate to="heroes" />} />
      </Routes>
    </BrowserRouter>
  );
}
 `}</CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample
            example={"heroes-react-router"}
            module="/TourOfHeroes.tsx"
          />
        </FlexBox>
      </Slide>
    </>
  );
}
