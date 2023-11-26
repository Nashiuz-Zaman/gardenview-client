// react imports
import PropTypes from "prop-types";

const InnerContainer = ({ children }) => {
  return (
    <div className="max-w-[90rem] 3xl:max-w-[100rem] px-4 md:px-8 lg:px-12 2xl:px-0 mx-auto">
      {children}
    </div>
  );
};

InnerContainer.propTypes = {
  children: PropTypes.node,
};

export default InnerContainer;
