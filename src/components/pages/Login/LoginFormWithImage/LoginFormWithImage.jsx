// react
import PropTypes from "prop-types";

// components
import LoginForm from "../LoginForm/LoginForm";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

const LoginFormWithImage = ({ imageSource, appLoading }) => {
  return (
    <div
      className={`grid grid-cols-[1.5fr_1fr] rounded-2xl overflow-hidden mx-auto w-[80%] 2xl:w-[70%] shadow-large form-animation`}
    >
      {/* image */}
      <div className="w-full h-full rounded-r-[100rem] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt="GardenView apartments"
        />
      </div>

      {/* login form */}
      <div>
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
