// react-router imports
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
