// react
import PropTypes from "prop-types";

const Description = ({ text, modifyClasses = "" }) => {
  return (
    <p
      className={`text-textMediumLight text-sm lg:text-base 2xl:text-xl font-medium leading-[1.5] lg:leading-[1.6] ${modifyClasses}`}
    >
      {text}
    </p>
  );
};

Description.propTypes = {
  text: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default Description;
