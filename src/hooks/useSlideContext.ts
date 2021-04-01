import { useContext } from "react";
import { SlideContext } from "spectacle";

export default function useSlideContext() {
  return useContext(SlideContext);
}
