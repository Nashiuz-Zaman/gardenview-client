// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create the context
export const LoginRegistrationContext = createContext();

const LoginRegistratonProvider = ({ children }) => {
  // registration states
  const [registrationInfo, setRegistrationInfo] = useState({
    showSuccessToast: false,
    errors: [],
  });

  // login STATES
  const [loginInfo, setLoginInfo] = useState({
    showSuccessToast: false,
    errors: [],
  });

  const valueObj = {
    registrationInfo,
    setRegistrationInfo,
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
