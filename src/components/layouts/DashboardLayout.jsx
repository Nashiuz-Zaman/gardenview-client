// react-router imports
import { Outlet } from "react-router-dom";

// component
import DashboardNav from "./../shared/DashboardNav/DashboardNav";

// hooks
import useAuthProvider from "./../../hooks/useAuthProvider";

function DashboardLayout() {
  const { userRole } = useAuthProvider();

  return (
    <div className="text-textPrimary overflow-hidden max-w-[120rem] mx-auto font-default">
      <div className="min-h-screen grid grid-cols-[1.25fr_5fr] items-stretch">
        {/* dashboard nav */}
        <div className="h-full">
          <DashboardNav role={userRole} />
        </div>

        <div className="h-full">
          {/* page content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
