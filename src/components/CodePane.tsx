import React from "react";
import { CodePane as SpectacleCodePane } from "spectacle";
import styled from "styled-components";

const CodePaneOverwrite = styled.div`
  pre {
    width: auto !important;
    display: flex;
    font-size: 16px !important;
  }

  code {
    font-family: JetBrains Mono, monospace !important;
  }

  code:first-child {
    padding-right: 2rem !important;
    color: rgb(128, 128, 128) !important;
  }
`;

interface CodePaneProps {
  language?: string;
  highlightRanges?: (number | [number, number])[];
  theme?: string;
  children: string;
}

export default function CodePane({
  language = "jsx",
  highlightRanges,
  children,
  theme = "darcula",
}: CodePaneProps) {
  return (
    <CodePaneOverwrite>
      <SpectacleCodePane
        language={language}
        highlightRanges={highlightRanges as any}
        theme={theme}
      >
        {children}
      </SpectacleCodePane>
    </CodePaneOverwrite>
  );
}
