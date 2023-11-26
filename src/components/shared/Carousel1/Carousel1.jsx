import PropTypes from "prop-types";

// custom hook
import useCarousel1 from "./useCarousel1";

// react icons
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

const Carousel1 = ({ imagesData }) => {
  const {
    goNextSlide,
    goPrevSlide,
    curSlide,
    prevSlide,
    nextSlide,
    setCurSlide,
    lastSlide,
  } = useCarousel1(imagesData);

  return (
    <div
      className="w-full aspect-[16/10] relative"
      style={{
        perspective: "1100px",
        perspectiveOrigin: "center",
      }}
    >
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

      {/* blur barrier */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[8px]"></div>

      {/* forward slides */}
      {imagesData &&
        imagesData.map((imageData) => {
          const { id, imageSource } = imageData;

          return (
            <div
              key={id}
              style={{
                backfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                top: "50%",
                transform: `translateY(-50%) translateX(${
                  id === curSlide
                    ? "50%"
                    : id < curSlide
                    ? "0%"
                    : id > curSlide
                    ? `300%`
                    : "auto"
                }) rotateY(${
                  id === curSlide
                    ? "0deg"
                    : id > curSlide
                    ? "-60deg"
                    : id < curSlide
                    ? "60deg"
                    : "0"
                })`,
              }}
              className={`absolute shadow-2xl ease-out ${
                id === curSlide || id === nextSlide || id === prevSlide
                  ? "transition-all duration-500 opacity-100 visible z-30"
                  : "transition-all duration-500 opacity-0 collapse z-10"
              } ${id === curSlide ? "w-1/2" : "w-1/4"} `}
            >
              <img
                style={{
                  backfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                className="w-full aspect-video object-cover"
                src={imageSource}
              />
            </div>
          );
        })}

      <div className="absolute bottom-[7.5%] left-1/2 -translate-x-1/2 flex space-x-5 items-center">
        {/* left button */}
        <button
          onClick={goPrevSlide}
          className={`bg-primary p-1 rounded-full transition-all duration-500 ${
            curSlide === 0 ? "opacity-0 collapse" : "opacity-100 visible"
          }`}
        >
          <PiCaretLeftBold className="text-white text-2xl" />
        </button>

        <div className="flex items-center gap-1">
          {/* image buttons */}
          {imagesData.map((imageData) => {
            const { id, imageSource } = imageData;

            return (
              <div
                key={id}
                onClick={() => {
                  setCurSlide(id);
                }}
                className={`block cursor-pointer ${
                  id === curSlide
                    ? "border-[2px] border-primary"
                    : "border-[2px] border-transparent"
                }`}
              >
                <img
                  className="block w-[10rem] aspect-video"
                  src={imageSource}
                />
              </div>
            );
          })}
        </div>

        {/* right button */}
        <button
          onClick={goNextSlide}
          className={`bg-primary p-1 rounded-full transition-all duration-500 ${
            curSlide === lastSlide
              ? "opacity-0 collapse"
              : "opacity-100 visible"
          }`}
        >
          <PiCaretRightBold className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

Carousel1.propTypes = {
  imagesData: PropTypes.array.isRequired,
};

export default Carousel1;
