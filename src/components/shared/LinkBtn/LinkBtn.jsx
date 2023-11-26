// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const LinkBtn = ({
  text,
  url,
  outlined = false,
  outlinedPrimary = false,
  hashed = false,
  modifyClasses = "",
}) => {
  // common classes
  const outlinedClasses =
    "bg-transparent border border-gray-300 hover:border-white text-gray-300 hover:text-white";

  const oulinedPrimaryClasses =
    "bg-transparent border border-primary text-primary hover:text-primaryLightest hover:border-primaryLightest";

  const primaryClasses =
    "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white";

  const allClasses =
    "block w-max transition-all duration-300 rounded-full text-center px-6 py-2";

  if (hashed) {
    return (
      <HashLink
        className={`${
          outlined
            ? outlinedClasses
            : outlinedPrimary
            ? oulinedPrimaryClasses
            : primaryClasses
        } ${allClasses} ${modifyClasses}`}
        to={url}
      >
        {text}
      </HashLink>
    );
  }

  return (
    <Link
      className={`${
        outlined
          ? outlinedClasses
          : outlinedPrimary
          ? oulinedPrimaryClasses
          : primaryClasses
      } ${allClasses} ${modifyClasses}`}
      to={url}
    >
      {text}
    </Link>
  );
};

LinkBtn.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  outlined: PropTypes.bool,
  outlinedPrimary: PropTypes.bool,
  hashed: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default LinkBtn;
