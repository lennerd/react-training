import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useSlideContext from "../hooks/useSlideContext";

const CodeSandboxIframe = styled.iframe`
  width: 1100px;
  height: 100%;
  border: 0;
  border-radius: 0.5rem;
  overflow: hidden;
`;

interface CodeSandboxProps {
  id: string;
}

export default function CodeSandbox({ id }: CodeSandboxProps) {
  const { isSlideActive } = useSlideContext();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [renderIframe, setRenderIframe] = useState(isSlideActive);
  const [iframeVisible, setIframeVisible] = useState(false);

  useEffect(() => {
    if (isSlideActive) {
      setRenderIframe(true);
    }
  }, [isSlideActive]);

  const handleLoad = () => {
    setIframeVisible(true);
  };

  return (
    <>
      {renderIframe && (
        <CodeSandboxIframe
          ref={iframeRef}
          className={classNames("opacity-0", "transition-opacity", {
            "opacity-100": iframeVisible,
          })}
          src={`https://codesandbox.io/embed/${id}?autoresize=1&fontsize=14&theme=dark`}
          onLoad={handleLoad}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      )}
    </>
  );
}
