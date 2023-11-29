// react imports
import PropTypes from "prop-types";

// react router
import { Link } from "react-router-dom";

// component
import ListOfLinks from "./../ListOfLinks/ListOfLinks";
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// hook
import useAuthProvider from "../../../hooks/useAuthProvider";

// data
import { navOptions } from "../../../nativeData/navigationOptions";

const DashboardNav = ({ role = null }) => {
  // extract log out function
  const { logout } = useAuthProvider();

  const linkClasses =
    "text-white hover:text-primary text transition-all duration-150";

  return (
    <div className="bg-black h-full pt-14 px-7">
      <div className="mb-20">
        {/* main heading */}
        <h2 className="text-white text-xl mb-7">Dashboard</h2>

        {/* dashboard links */}
        <ul className="space-y-4">
          <li>
            <Link className={linkClasses} to="/dashboard">
              Home
            </Link>
          </li>

          {/* if only user */}
          {role === "user" && (
            <>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Announcements
                </Link>
              </li>
            </>
          )}

          {/* if member */}
          {role === "member" && (
            <>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Make Payment
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Payment History
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Announcements
                </Link>
              </li>
            </>
          )}

          {/* if admin */}
          {role === "admin" && (
            <>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Admin Profile
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Manage Members
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Make Announcement
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Agreement Requests
                </Link>
              </li>
              <li>
                <Link className={linkClasses} to="/dashboard">
                  Manage Coupons
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* common links */}
      <div className="mb-20">
        <h2 className="text-white text-xl mb-7 ">Website</h2>

        {navOptions && (
          <ListOfLinks
            linksData={navOptions}
            modifyClasses="gap-4"
            linksModifyClasses="hover:no-underline"
          />
        )}
      </div>

      {/* logout button */}
      <ButtonBtn text="Log out" onClickFunction={logout} />
    </div>
  );
};

DashboardNav.propTypes = {
  role: PropTypes.any,
};

export default DashboardNav;
