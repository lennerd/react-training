import styled from "styled-components";

const CodeSandboxIframe = styled.iframe`
  width: 1100px;
  height: 100%;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;

interface CodeSandboxProps {
  id: string;
}

export default function CodeSandbox({ id }: CodeSandboxProps) {
  return (
    <CodeSandboxIframe
      src={`https://codesandbox.io/embed/${id}?autoresize=1&fontsize=14&theme=dark`}
    />
  );
}
