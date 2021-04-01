import CodeSandbox from "./CodeSandbox";

interface ReactTrainingCodeSandbox {
  example: string;
}

export default function ReactTrainingExample({
  example,
}: ReactTrainingCodeSandbox) {
  return (
    <CodeSandbox
      id={`github/lennerd/react-training/tree/main/examples/${example}`}
    />
  );
}
