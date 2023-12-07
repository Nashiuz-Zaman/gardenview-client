// react
import PropTypes from "prop-types";

// react icons
import { ImSpinner9 } from "react-icons/im";

const LoadingSpinner = ({
  text = "Loading",
  fullscreen = false,
  fullHeight = false,
}) => {
  return (
    <div
      className={`${
        fullscreen ? "min-h-screen" : fullHeight ? "h-full" : "min-h-[30rem]"
      }`}
    >
      <div
        className={`${
          fullscreen ? "min-h-screen" : "h-full"
        }  flex justify-center items-center p-8`}
      >
        <div className="flex items-center gap-3">
          <p className="text-2xl">{text}</p>{" "}
          <ImSpinner9 className="text-2xl text-primaryLight animate-spin" />
        </div>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  fullscreen: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

export default LoadingSpinner;
