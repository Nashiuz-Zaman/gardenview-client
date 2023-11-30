// react
import PropTypes from "prop-types";

const NoData = ({
  text = "No Data To Show",
  fullscreen = false,
  fullHeight = false,
}) => {
  return (
    <div
      className={`${
        fullscreen ? "min-h-screen" : fullHeight ? "h-full" : "min-h-[20rem]"
      } flex justify-center items-center`}
    >
      <div>
        <p className="text-2xl">{text}</p>
      </div>
    </div>
  );
};

NoData.propTypes = {
  text: PropTypes.string,
  fullscreen: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

export default NoData;
