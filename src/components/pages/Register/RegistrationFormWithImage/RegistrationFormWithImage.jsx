// react
import PropTypes from "prop-types";

// react-router
import { Link } from "react-router-dom";

// components
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import RegistrationForm from "./../RegistrationForm/RegistrationForm";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

// hook
import useAuthProvider from "../../../../hooks/useAuthProvider";

const RegistrationFormWithImage = ({ imageSource, appLoading }) => {
  const { userAlreadyRegistered, setUserAlreadyRegistered } = useAuthProvider();

  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] 2xl:grid-cols-[1fr_max-content] rounded-2xl overflow-hidden mx-auto w-[90%] md:w-[80%] 2md:w-[90%] lg:w-[56rem] 2xl:w-[60rem] shadow-large form-animation min-h-[33rem]`}
    >
      {/* image */}
      <div className="w-full h-full rounded-b-full 2md:rounded-b-none 2md:rounded-r-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt="GardenView apartments"
        />
      </div>

      {/* Registration form */}
      <div>
        {appLoading && <LoadingSpinner fullHeight={true} text="Registering" />}
        {!appLoading && !userAlreadyRegistered && <RegistrationForm />}

        {/* if user exists then show the user exists message */}
        {!appLoading && userAlreadyRegistered && (
          <div>
            <h2 className="mb-7 text-center text-2xl">User already exists</h2>

            <Link to="/auth/login" className="block mx-auto">
              <ButtonBtn
                onClickFunction={() => {
                  setUserAlreadyRegistered(false);
                }}
                text="Log in to your account"
                modifyClasses="mx-auto"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

RegistrationFormWithImage.propTypes = {
  imageSource: PropTypes.string,
  appLoading: PropTypes.bool,
};

export default RegistrationFormWithImage;
