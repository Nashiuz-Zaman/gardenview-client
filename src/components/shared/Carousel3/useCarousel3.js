// react
import { useEffect, useState } from "react";

const useCarousel2 = (imagesData, interval) => {
  const lastSlide = imagesData.length - 1;
  const [curSlide, setCurSlide] = useState(0);
  const [shouldStart, setShouldStart] = useState(null);

  console.log(shouldStart);

  useEffect(() => {
    let timer;
    if (shouldStart === true) {
      timer = setTimeout(() => {
        setCurSlide((prev) => {
          return prev === lastSlide ? 0 : prev + 1;
        });

        clearTimeout(timer);
      }, interval);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [curSlide, lastSlide, interval, shouldStart]);

  return {
    curSlide,
    setShouldStart,
  };
};

export default useCarousel2;
