// react
import { useContext } from "react";

// context
import { FlatsAgreementsContext } from "../providers/FlatsAgreementsProvider";

const useFlatsAgreementsProvider = () => {
  const contextValue = useContext(FlatsAgreementsContext);

  if (!contextValue) {
    throw new Error("Provider hasn't wrapped the app");
  } else {
    return contextValue;
  }
};

export default useFlatsAgreementsProvider;
