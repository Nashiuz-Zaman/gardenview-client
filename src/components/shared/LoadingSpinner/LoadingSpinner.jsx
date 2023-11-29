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
        fullscreen ? "min-h-screen" : fullHeight ? "h-full" : "min-h-[20rem]"
      } flex justify-center items-center`}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{text}</div>{" "}
        <div className="text-2xl text-primaryLight animate-spin">
          <ImSpinner9 />
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
