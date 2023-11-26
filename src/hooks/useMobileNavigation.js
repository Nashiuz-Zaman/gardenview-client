// react
import { useState } from "react";

const useMobileNavigation = () => {
  // declare the state of mobile navigation
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openNav = () => {
    setMobileNavOpen(true);
  };
  const closeNav = () => {
    setMobileNavOpen(false);
  };

  return { mobileNavOpen, openNav, closeNav };
};

export default useMobileNavigation;
