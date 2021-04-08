import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useSlideContext from "../hooks/useSlideContext";

const CodeSandboxIframe = styled.iframe`
  width: 1100px;
  height: 100%;
  border: 0;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export interface CodeSandboxProps {
  id: string;
  module?: string;
}

const CodeSandbox = memo(({ id, module }: CodeSandboxProps) => {
  const { isSlideActive } = useSlideContext();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [renderIframe, setRenderIframe] = useState(isSlideActive);

  useEffect(() => {
    if (!isSlideActive) {
      return;
    }

    const timeout = setTimeout(() => {
      setRenderIframe(true);
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [isSlideActive]);

  const additionQueryParams: string[] = [];

  if (module != null) {
    additionQueryParams.push(`module=${module}`);
  }

  let src = `https://codesandbox.io/embed/${id}?autoresize=1&fontsize=14&theme=dark&runonclick=1`;

  if (additionQueryParams.length > 0) {
    src += `&${additionQueryParams.join("&")}`;
  }

  return (
    <>
      {renderIframe && (
        <CodeSandboxIframe
          ref={iframeRef}
          src={src}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      )}
    </>
  );
});

export default CodeSandbox;
