// react
import { useEffect, useState } from "react";

// react-router imports
import { Outlet } from "react-router-dom";

// react icons
import { FaChevronLeft } from "react-icons/fa6";

// component
import DashboardNav from "./../shared/DashboardNav/DashboardNav";

// hooks
import useAuthProvider from "./../../hooks/useAuthProvider";
import InnerContainer from "./../containers/InnerContainer/InnerContainer";
import useMediaQueryContext from "../../hooks/useMediaQueryContext";

function DashboardLayout() {
  // style according to screen sizes
  const { computerScreenMatches } = useMediaQueryContext();

  // nav open and close state
  const [navExpand, setNavExpand] = useState(
    computerScreenMatches ? true : false
  );
  const { userRole } = useAuthProvider();

  // update screen state if screen changes to small screen
  useEffect(() => {
    setNavExpand(computerScreenMatches ? true : false);
  }, [computerScreenMatches]);

  const handleNavToggle = () => {
    setNavExpand((prev) => !prev);
  };

  const handleCloseNav = (e) => {
    if (e.target.tagName === "A") {
      setNavExpand(false);
    }
  };

  const transitionClasses = "transition-all duration-500 ease-out";

  return (
    <div className="text-textPrimary overflow-x-hidden max-w-[120rem] mx-auto font-default">
      {/* dashboard nav and toggle button + main content */}
      <div className="min-h-screen relative">
        {/* dashboard nav + toggle button */}
        {/* translate only the size of the nav, don't include the button */}
        <div
          className={`bg-black flex absolute top-0 left-0 min-h-screen ${
            !navExpand && "-translate-x-[15rem]"
          } ${transitionClasses}`}
        >
          {/* dashboard nav */}
          <DashboardNav role={userRole} closeNavFunction={handleCloseNav} />

          {/* toggle button */}
          <button
            onClick={handleNavToggle}
            className="flex justify-center min-h-screen items-center bg-textPrimary w-[1.5rem]"
          >
            <FaChevronLeft
              className={`${transitionClasses} text-white text ${
                navExpand ? "rotate-0" : "rotate-[-180deg]"
              }`}
            />
          </button>
        </div>

        {/* set margin according to the size of the translate and the nav */}

        <InnerContainer>
          <div
            className={`${
              computerScreenMatches && navExpand
                ? "ml-[16.5rem]"
                : "ml-[1.5rem]"
            } ${transitionClasses} pt-sectionGapSm`}
          >
            {/* page content */}
            <Outlet />
          </div>
        </InnerContainer>
      </div>
    </div>
  );
}

export default DashboardLayout;
