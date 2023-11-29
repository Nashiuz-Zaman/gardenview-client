// react
import { useState } from "react";

// react-router imports
import { Outlet } from "react-router-dom";

// react icons
import { FaChevronLeft } from "react-icons/fa6";

// component
import DashboardNav from "./../shared/DashboardNav/DashboardNav";

// hooks
import useAuthProvider from "./../../hooks/useAuthProvider";
import InnerContainer from "./../containers/InnerContainer/InnerContainer";

function DashboardLayout() {
  const [navExpand, setNavExpand] = useState(true);
  const { userRole } = useAuthProvider();

  const handleNavToggle = () => {
    setNavExpand((prev) => !prev);
  };

  const transitionClasses = "transition-all duration-500 ease-out";

  return (
    <div className="text-textPrimary overflow-hidden max-w-[120rem] mx-auto font-default">
      {/* dashboard nav and toggle button + main content */}
      <div className="min-h-screen relative">
        {/* dashboard nav + toggle button */}
        {/* translate only the size of the nav, don't include the button */}
        <div
          className={`flex absolute top-0 left-0 min-h-screen ${
            !navExpand && "-translate-x-[15rem]"
          } ${transitionClasses}`}
        >
          {/* dashboard nav */}
          <DashboardNav role={userRole} />

          {/* toggle button */}
          <button
            onClick={handleNavToggle}
            className="flex justify-center min-h-screen items-center bg-textPrimary w-[1.5rem]"
          >
            <FaChevronLeft
              className={`${transitionClasses} text-white text-lg ${
                navExpand ? "rotate-0" : "rotate-[-180deg]"
              }`}
            />
          </button>
        </div>

        {/* set margin according to the size of the translate and the nav */}
        <div
          className={`${
            navExpand ? "ml-[16.5rem]" : "ml-[1.5rem]"
          } ${transitionClasses} pt-sectionGapSm`}
        >
          <InnerContainer>
            {/* page content */}
            <Outlet />
          </InnerContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
