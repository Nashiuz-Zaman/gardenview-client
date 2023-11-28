// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create the context
export const LoginRegistrationContext = createContext();

const LoginRegistratonProvider = ({ children }) => {
  // set to true when the submit button has been clicked to show errors only when the submission has happened
  const [formSubmitted, setFormSubmitted] = useState(false);

  // registration states
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    username: "",
    photoFile: "",
    showSuccessToast: false,
    errors: [],
  });

  // login STATES
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    showSuccessToast: false,
    error: "",
  });

  const valueObj = {
    registrationInfo,
    setFormSubmitted,
    setRegistrationInfo,
    formSubmitted,
    loginInfo,
    setLoginInfo,
  };

  return (
    <LoginRegistrationContext.Provider value={valueObj}>
      {children}
    </LoginRegistrationContext.Provider>
  );
};

LoginRegistratonProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default LoginRegistratonProvider;
