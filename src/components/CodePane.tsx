import { CodePane as SpectacleCodePane } from "spectacle";
import styled from "styled-components";

const CodePaneOverwrite = styled.div`
  code {
    font-family: JetBrains Mono, monospace !important;
  }

  code:first-child {
    padding-right: 2rem !important;
    color: rgb(128, 128, 128) !important;
  }
`;

interface CodePaneProps {
  language: string;
  highlightRanges?: (number | [number, number])[];
  theme?: string;
  children: string;
}

export default function CodePane({
  language,
  highlightRanges,
  children,
  theme,
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
