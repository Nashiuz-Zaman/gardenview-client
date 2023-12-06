// react
import PropTypes from "prop-types";

// components
import LoginForm from "../LoginForm/LoginForm";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

const LoginFormWithImage = ({ imageSource, appLoading }) => {
  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] rounded-2xl overflow-hidden mx-auto w-[90%] md:w-[80%] 2md:w-[90%] lg:w-[56rem] 2xl:w-[60rem] shadow-large form-animation min-h-[33rem]`}
    >
      {/* image */}
      <div className="w-full h-full rounded-b-full 2md:rounded-b-none 2md:rounded-tr-[25rem] overflow-hidden">
        <img
          className="h-full object-cover"
          src={imageSource}
          alt="GardenView apartments"
        />
      </div>

      {/* login form */}
      <div className="w-full">
        {appLoading && <LoadingSpinner fullHeight={true} text="Logging in" />}
        {!appLoading && <LoginForm />}
      </div>
    </div>
  );
};

LoginFormWithImage.propTypes = {
  imageSource: PropTypes.string,
  appLoading: PropTypes.bool,
};

export default LoginFormWithImage;
