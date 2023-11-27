import PropTypes from "prop-types";

// custom hook
import useCarousel3 from "./useCarousel3";
import { useEffect } from "react";

const Carousel3 = ({ imagesData, interval = 3000, shouldStart = false }) => {
  const { curSlide, setShouldStart } = useCarousel3(imagesData, interval);

  useEffect(() => {
    setShouldStart(shouldStart);
  }, [setShouldStart, shouldStart]);

  return (
    <div className="w-full aspect-[16/23] relative">
      {/* background slides */}
      {imagesData &&
        imagesData.map((imageData) => {
          const { id, imageSource } = imageData;

          return (
            <div
              key={id}
              style={{ background: `url(${imageSource})` }}
              className={`absolute w-full h-full -z-10 top-0 left-0 !bg-cover !bg-center duration-500 ${
                id === curSlide ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          );
        })}
    </div>
  );
};

Carousel3.propTypes = {
  imagesData: PropTypes.array.isRequired,
  interval: PropTypes.number,
  shouldStart: PropTypes.bool,
};

export default Carousel3;
