import PropTypes from "prop-types";

// custom hook
import useCarousel3 from "./useCarousel3";

const Carousel3 = ({ imagesData, interval = 3000 }) => {
  const { curSlide } = useCarousel3(imagesData, interval);

  return (
    <div
      className="w-full aspect-[16/23] relative"
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
    </div>
  );
};

Carousel3.propTypes = {
  imagesData: PropTypes.array.isRequired,
  interval: PropTypes.number,
};

export default Carousel3;
