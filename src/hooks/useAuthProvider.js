// react
import { useContext } from "react";

// auth context
import { AuthContext } from "../Providers/AuthProvider";

const useAuthProvider = () => {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error("Provider hasn't wrapped the app");
  } else {
    return contextValue;
  }
};

export default useAuthProvider;
