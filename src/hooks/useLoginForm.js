// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAuthProvider from "./useAuthProvider";
import useLoginRegistrationProvider from "./useLoginRegistrationProvider";
// import useControlCookie from "./useControlCookie";

const useLoginForm = () => {
  // extract functions from auth context
  const { login, setAppLoading, loginGoogle } = useAuthProvider();

  // extract different login and registration related states from this hook
  const { loginInfo, setLoginInfo } = useLoginRegistrationProvider();

  // // take the create cookie function from the hook
  // const { createCookie } = useControlCookie();

  // create the navigation function
  const navigate = useNavigate();

  // extract state value from use location hook
  const { state } = useLocation();

  // on change run this function for email field
  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };

  // handle google sign in
  const handleLoginGoogle = () => {
    loginGoogle()
      .then((result) => {
        // get user email from result
        const email = result.user.email;

        // if login is successful send post request to jwt api to create jwt token
        // createCookie(email);

        // if login successful then show success toast first and then set timer to navigate to the target page after a certain time
        setLoginInfo((prev) => {
          return { ...prev, showSuccessToast: true };
        });

        // set the timer and clear the timer
        const timer = setTimeout(() => {
          setLoginInfo((prev) => {
            return { ...prev, showSuccessToast: false };
          });

          // if there is state navigate to that state or navigate to home page
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }

          // clear the timeout
          clearTimeout(timer);
        }, 2100);
      })
      // handle error
      .catch((error) => {
        console.error(error);
        setLoginInfo((prev) => {
          return { ...prev, error: error.message };
        });

        setAppLoading(false);
      });
  };

  // handle normal login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginInfo((prev) => {
      return { ...prev, loginError: "" };
    });

    login(loginInfo.email, loginInfo.password)
      .then(() => {
        // if login is successful send post request to backend's jwt api to create a jwt token
        // createCookie(loginInfo.email);

        // if login successful then show success toast first and then set timer to navigate to the target page after a certain time
        setLoginInfo((prev) => {
          return { ...prev, showSuccessToast: true };
        });

        // set the timer and clear the timer
        const timer = setTimeout(() => {
          setLoginInfo((prev) => {
            return { ...prev, showSuccessToast: false };
          });

          // if there is state navigate to that state or navigate to home page
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }

          // clear the timeout
          clearTimeout(timer);
        }, 2100);
      })

      // handle error
      .catch((error) => {
        setLoginInfo((prev) => {
          return {
            ...prev,
            error: "Email/Password doesn't match. Try again.",
          };
        });

        console.error(error.message);
        setAppLoading(false);
      });
  };

  return {
    loginInfo,
    setLoginInfo,
    getEmail,
    getPassword,
    handleLogin,
    handleLoginGoogle,
  };
};

export default useLoginForm;
