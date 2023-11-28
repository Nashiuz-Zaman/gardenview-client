// components
import Brandlogo from "../Brandlogo/Brandlogo";
import LargeScreenNav from "./../LargeScreenNav/LargeScreenNav";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import LinkBtn from "./../../shared/LinkBtn/LinkBtn";
import MobileMenuBtn from "./../MobileMenuBtn/MobileMenuBtn";
import MobileNav from "./../MobileNav/MobileNav";
import UserProfile from "./../UserProfile/UserProfile";
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// hooks
import useMediaQueryContext from "./../../../hooks/useMediaQueryContext";
import useMobileNavigation from "./../../../hooks/useMobileNavigation";
import useAuthProvider from "./../../../hooks/useAuthProvider";

// data
import logo from "./../../../assets/websiteLogo/logo-primary.png";
import { navOptions } from "./../../../nativeData/navigationOptions";

const Header = () => {
  // extra user from auth
  const { user, appLoading, logout } = useAuthProvider();
  console.log(user);
  // check screen size
  const { computerScreenMatches } = useMediaQueryContext();

  // extract mobile nav functionality
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  return (
    <header className="sticky w-full top-0 py-sectionGapSm z-50">
      <InnerContainer>
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* website logo */}
          <div>
            <Brandlogo imageSource={logo} />
          </div>

          {/* if computer screen size matches then show this part */}
          {computerScreenMatches && (
            <div className="hidden lg:block justify-self-center">
              {/* desktop navbar */}
              <LargeScreenNav navOptions={navOptions} />
            </div>
          )}

          <div className="flex items-center gap-3 justify-self-end">
            {/* auth related options login/logout etc */}

            {/* if app is finished loading and there is NO user */}
            {/* show the login button */}
            {!appLoading && !user && (
              <div className="block justify-self-end">
                <LinkBtn text="Login" url="/auth/login" />
              </div>
            )}

            {/* if app is finished loading and there is YES user */}
            {/* show the userprofile */}
            {!appLoading && user && (
              <>
                <UserProfile authUser={user} />
                <ButtonBtn text="logout" onClickFunction={logout} />
              </>
            )}

            {/* for small sizes like tablet and mobile show this part */}
            {!computerScreenMatches && (
              <>
                <div className="justify-self-end">
                  <MobileMenuBtn openNavFunction={openNav} />
                </div>

                <MobileNav
                  closeNavFunction={closeNav}
                  openState={mobileNavOpen}
                />
              </>
            )}
          </div>
        </div>
      </InnerContainer>
    </header>
  );
};

export default Header;
