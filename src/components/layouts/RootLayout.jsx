// react-router imports
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Outlet />
    </div>
  );
}

export default RootLayout;
