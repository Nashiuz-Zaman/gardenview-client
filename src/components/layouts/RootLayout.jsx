// react-router imports
import { Outlet } from "react-router-dom";

// components
import Header from "../shared/Header/Header";

function RootLayout() {
  return (
    <div className="text-textPrimary min-h-screen flex flex-col overflow-x-hidden max-w-[120rem] mx-auto font-default">
      <Header />

      <Outlet />
    </div>
  );
}

export default RootLayout;
