// components
import Brandlogo from "../Brandlogo/Brandlogo";
import LargeScreenNav from "./../LargeScreenNav/LargeScreenNav";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import LinkBtn from "./../../shared/LinkBtn/LinkBtn";
import MobileMenuBtn from "./../MobileMenuBtn/MobileMenuBtn";
import MobileNav from "./../MobileNav/MobileNav";

// hooks
import useMediaQueryContext from "./../../../hooks/useMediaQueryContext";
import useMobileNavigation from "./../../../hooks/useMobileNavigation";

// data
import logo from "./../../../assets/websiteLogo/logo-primary.png";
import { navOptions } from "./../../../nativeData/navigationOptions";

const Header = () => {
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
            <>
              {/* desktop navbar */}
              <div className="hidden lg:block justify-self-center">
                <LargeScreenNav navOptions={navOptions} />
              </div>

              {/* auth related options login/logout etc */}
              <div className="hidden lg:block justify-self-end">
                <LinkBtn text="Login" />
              </div>
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
      </InnerContainer>
    </header>
  );
};

export default Header;
