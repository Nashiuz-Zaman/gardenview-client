// react
import PropTypes from "prop-types";

const DashboardHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h2 className={`font-bold text-center text-3xl ${modifyClasses}`}>
      {text}
    </h2>
  );
};

DashboardHeading.propTypes = {
  text: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default DashboardHeading;
