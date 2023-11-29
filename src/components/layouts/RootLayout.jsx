// react-router imports
import { Outlet } from "react-router-dom";

// hooks
import useScrollToTop from "./../../hooks/useScrollToTop";

// components
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

function RootLayout() {
  useScrollToTop();

  return (
    <div className="text-textPrimary min-h-screen flex flex-col overflow-x-hidden max-w-[120rem] mx-auto font-default">
      {/* header */}
      <div className="mb-sectionGapSm">
        <Header />
      </div>

      {/* page content */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;
