// react imports
import PropTypes from "prop-types";

const OuterContainer = ({ children, modifyClasses = "" }) => {
  return (
    <div className={`max-w-[120rem] mx-auto ${modifyClasses}`}>{children}</div>
  );
};

OuterContainer.propTypes = {
  children: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default OuterContainer;
