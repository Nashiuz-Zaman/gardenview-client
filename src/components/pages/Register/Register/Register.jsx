// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LinkBtn from "./../../../shared/LinkBtn/LinkBtn";

// hook
import useAuthProvider from "../../../../hooks/useAuthProvider";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import { Link } from "react-router-dom";

const Register = () => {
  const { userExists, setUserExists } = useAuthProvider();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <SectionHeading
          modifyClasses="text-primary mb-7 text-center"
          text="Welcome to Garden Views"
        />

        {/* if user doesn't exist then show the registration form */}
        {!userExists && (
          <>
            <h2 className="capitalize mb-2 text-center text-2xl">
              Register your account
            </h2>
            <RegistrationForm />
          </>
        )}

        {/* if user exists then show the user exists message */}
        {userExists && (
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
