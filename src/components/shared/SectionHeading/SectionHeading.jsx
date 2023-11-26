// react
import PropTypes from "prop-types";

const SectionHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h2
      className={`text-3xl md:text-5xl lg:text-6xl font-semibold ${modifyClasses}`}
    >
      {text}
    </h2>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default SectionHeading;
