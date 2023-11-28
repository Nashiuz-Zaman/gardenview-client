// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAuthProvider from "./useAuthProvider";
import useLoginRegistrationProvider from "./useLoginRegistrationProvider";
import useAxiosPublic from "./useAxiosPublic";

const useLoginForm = () => {
  // extract functions from auth context
  const { login, setAppLoading, loginGoogle, setUserRole } = useAuthProvider();

  // axios
  const axiosPublic = useAxiosPublic();

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
  const handleLoginGoogle = async () => {
    const result = await loginGoogle();

    // if google login is succesful send the google user object to the database to check role and existence and also to make a jwt token
    if (result.user) {
      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
      };

      const googleLoginResponse = await axiosPublic.post(
        "/google-login",
        googleUser
      );

      if (googleLoginResponse.data.success) {
        // if google login was successful set the jwt token and the user role
        localStorage.setItem("token", googleLoginResponse.data.token);
        setUserRole(googleLoginResponse.data.role);

        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }

        setAppLoading(false);
      }
    }

    // loginGoogle()
    //   .then((result) => {
    //     // get user email from result
    //     const email = result.user.email;

    //     // if login is successful send post request to jwt api to create jwt token
    //     // createCookie(email);

    //     // if login successful then show success toast first and then set timer to navigate to the target page after a certain time
    //     setLoginInfo((prev) => {
    //       return { ...prev, showSuccessToast: true };
    //     });

    //     // set the timer and clear the timer
    //     const timer = setTimeout(() => {
    //       setLoginInfo((prev) => {
    //         return { ...prev, showSuccessToast: false };
    //       });

    //       // if there is state navigate to that state or navigate to home page

    //       // clear the timeout
    //       clearTimeout(timer);
    //     }, 2100);
    //   })
    //   // handle error
    //   .catch((error) => {
    //     console.error(error);
    //     setLoginInfo((prev) => {
    //       return { ...prev, error: error.message };
    //     });

    //     setAppLoading(false);
    //   });
  };

  // handle normal login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginInfo((prev) => {
      return { ...prev, loginError: "" };
    });

    try {
      const result = await login(loginInfo.email, loginInfo.password);

      //  if firebase login is successful, check database for user role
      if (result.user) {
        const loginResponse = await axiosPublic.post("/login", {
          email: result.user.email,
        });

        // set users role to a central role first when they login in the app anytime! BELOW

        // set user's role and the jwt token in the localstorage
        setUserRole(loginResponse.data.role);
        localStorage.setItem("token", loginResponse.data.token);

        // send them wherever they were going
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
        setAppLoading(false);
      }
    } catch (error) {
      setLoginInfo((prev) => {
        return {
          ...prev,
          error: "Email/Password doesn't match. Try again.",
        };
      });
      setAppLoading(false);
    }
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
