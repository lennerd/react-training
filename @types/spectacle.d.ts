declare module "spectacle" {
  export function useSteps(
    numSteps?: number,
    options?: { id: string; stepIndex: number }
  ): {
    stepId: number;
    isActive: boolean;
    step: number;
    placeholder: JSX.Element;
  };
}
