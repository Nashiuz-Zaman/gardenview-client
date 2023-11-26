// react
import { useContext } from "react";

// context
import { MediaQueryContext } from "./../providers/MediaQueryContext";

const useMediaQueryContext = () => {
  const contextValue = useContext(MediaQueryContext);

  if (!contextValue) {
    throw new Error("Provider is not wrapping the content");
  }

  return contextValue;
};

export default useMediaQueryContext;
