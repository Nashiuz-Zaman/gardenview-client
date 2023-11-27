// react-router imports
import { Outlet } from "react-router-dom";

// components
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

function RootLayout() {
  return (
    <div className="text-textPrimary min-h-screen flex flex-col overflow-hidden max-w-[120rem] mx-auto font-default">
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
