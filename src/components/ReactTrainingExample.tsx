import CodeSandbox, { CodeSandboxProps } from "./CodeSandbox";

interface ReactTrainingCodeSandbox extends Omit<CodeSandboxProps, "id"> {
  example: string;
}

export default function ReactTrainingExample({
  example,
  ...props
}: ReactTrainingCodeSandbox) {
  return (
    <CodeSandbox
      id={`github/lennerd/react-training/tree/main/examples/${example}`}
      {...props}
    />
  );
}
