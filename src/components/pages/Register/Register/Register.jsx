// react imports
import { useEffect } from "react";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

// react router
import { Link } from "react-router-dom";

// hook
import useAuthProvider from "../../../../hooks/useAuthProvider";
import useLoginRegistrationProvider from "../../../../hooks/useLoginRegistrationProvider";

const Register = () => {
  const { userExists, setUserExists, appLoading } = useAuthProvider();
  const { setRegistrationInfo } = useLoginRegistrationProvider();

  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      setRegistrationInfo({
        email: "",
        password: "",
        username: "",
        photoFile: "",
        showSuccessToast: false,
        errors: [],
        generalError: null,
      });
    };
  }, [setRegistrationInfo]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <SectionHeading
          modifyClasses="text-primary mb-7 text-center"
          text="Welcome to Garden Views"
        />

        {appLoading && <LoadingSpinner text="Registering" />}

        {/* if user doesn't exist then show the registration form */}
        {!userExists && !appLoading && (
          <>
            <h2 className="capitalize mb-2 text-center text-2xl">
              Register your account
            </h2>
            <RegistrationForm />
          </>
        )}

        {/* if user exists then show the user exists message */}
        {userExists && !appLoading && (
          <>
            <h2 className="mb-7 text-center text-2xl">User already exists</h2>

            <Link to="/auth/login" className="block mx-auto">
              <ButtonBtn
                onClickFunction={() => {
                  setUserExists(false);
                }}
                text="Log in to your account"
                modifyClasses="mx-auto"
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
