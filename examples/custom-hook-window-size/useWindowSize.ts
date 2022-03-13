import React from "react";

export interface Size {
  width: number;
  height: number;
}

function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowSize(): Size {
  const [size, setSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    const handleResize = () => {
      setSize(getWindowSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
