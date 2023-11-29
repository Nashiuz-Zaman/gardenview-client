// react
import { useEffect } from "react";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import LoginForm from "./../LoginForm/LoginForm";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

// hooks
import useAuthProvider from "../../../../hooks/useAuthProvider";
import useLoginRegistrationProvider from "../../../../hooks/useLoginRegistrationProvider";

const Login = () => {
  const { appLoading } = useAuthProvider();
  const { setLoginInfo } = useLoginRegistrationProvider();

  useEffect(() => {
    return () => {
      setLoginInfo({
        email: "",
        password: "",
        showSuccessToast: false,
        error: "",
      });
    };
  }, [setLoginInfo]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <SectionHeading
          modifyClasses="text-primary mb-7 text-center"
          text="Welcome back!"
        />

        {appLoading && <LoadingSpinner text="Logging in" />}

        {!appLoading && (
          <>
            <h2 className="capitalize mb-2 text-center text-2xl">
              Login to your account
            </h2>
            <LoginForm />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
