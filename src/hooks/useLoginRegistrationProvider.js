// react imports
import { useContext } from "react";

// context imports
import { LoginRegistrationContext } from "../Providers/LoginRegistrationProvider";

const useLoginRegistrationProvider = () => {
  const contextValue = useContext(LoginRegistrationContext);

  if (!contextValue) {
    throw new Error("Provider hasn't wrapped the app");
  } else {
    return contextValue;
  }
};

export default useLoginRegistrationProvider;
