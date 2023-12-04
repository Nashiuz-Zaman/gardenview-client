// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAuthProvider from "./useAuthProvider";
import useLoginRegistrationProvider from "./useLoginRegistrationProvider";
import useAxiosPublic from "./useAxiosPublic";

const useLoginForm = () => {
  // extract functions from auth context
  const {
    login,
    setAppLoading,
    loginGoogle,
    setUserShouldExist,
    setProfileData,
  } = useAuthProvider();

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
        image: result.user.photoURL,
      };

      // check with database if the google user already exists
      const googleLoginResponse = await axiosPublic.post(
        "/google-login",
        googleUser
      );

      if (googleLoginResponse.data.success) {
        // set profile data, user should exist and the jwt token
        setProfileData(googleLoginResponse.data.user);
        setUserShouldExist(true);
        localStorage.setItem("token", googleLoginResponse.data.token);

        // send them where they were previously going
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
        setAppLoading(false);
      }
    }
  };

  // handle normal login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginInfo((prev) => {
      return { ...prev, loginError: "" };
    });

    try {
      // firebase login api call
      const result = await login(loginInfo.email, loginInfo.password);

      //  if firebase login is successful, check database for profile data
      if (result.user) {
        const loginResponse = await axiosPublic.post("/login", {
          email: result.user.email,
        });

        if (loginResponse.data.success) {
          setProfileData(loginResponse.data.user);
          setUserShouldExist(true);
          // set profile and the jwt token in the localstorage
          localStorage.setItem("token", loginResponse.data.token);

          // send them where they were previously going
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }
          setAppLoading(false);
        }
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
