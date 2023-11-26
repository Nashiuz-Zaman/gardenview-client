// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

const Brandlogo = ({ imageSource, modifyClasses = "" }) => {
  return (
    <div className={`w-max ${modifyClasses}`}>
      <Link className="block w-full h-full" to="/">
        <img className="block h-[5rem]" src={imageSource} alt="Website Logo" />
      </Link>
    </div>
  );
};

Brandlogo.propTypes = {
  modifyClasses: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
};

export default Brandlogo;
