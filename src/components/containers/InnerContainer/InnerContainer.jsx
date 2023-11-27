// react imports
import PropTypes from "prop-types";

const InnerContainer = ({ children }) => {
  return (
    <div className="max-w-[90rem] 3xl:max-w-full px-4 md:px-8 lg:px-12 2xl:px-0 mx-auto 3xl:px-[7rem]">
      {children}
    </div>
  );
};

InnerContainer.propTypes = {
  children: PropTypes.node,
};

export default InnerContainer;
