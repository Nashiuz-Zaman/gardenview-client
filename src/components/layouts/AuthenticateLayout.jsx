// react-router imports
import { Outlet } from "react-router-dom";

function AuthenticateLayout() {
  return (
    <div className="text-textPrimary min-h-screen flex flex-col overflow-hidden max-w-[120rem] mx-auto font-default">
      {/* page content */}
      <Outlet />
    </div>
  );
}

export default AuthenticateLayout;
