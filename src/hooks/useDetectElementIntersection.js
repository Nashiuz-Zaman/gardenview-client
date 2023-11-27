// react
import { useEffect, useState } from "react";

// hook
import useIntersectionObserver from "./useIntersectionObserver";

const useDetectElementIntersection = (ref, threshold = 0) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  console.log(shouldAnimate);

  const { entry, observer } = useIntersectionObserver(ref, threshold);

  useEffect(() => {
    if (entry !== null) {
      if (entry.isIntersecting === true) {
        setShouldAnimate(true);
        observer.unobserve(entry.target);
      }
    }
  }, [entry, observer, setShouldAnimate]);

  return { shouldAnimate };
};

export default useDetectElementIntersection;
