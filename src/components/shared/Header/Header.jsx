// components
import Brandlogo from "../Brandlogo/Brandlogo";
import LargeScreenNav from "./../LargeScreenNav/LargeScreenNav";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import LinkBtn from "./../../shared/LinkBtn/LinkBtn";

// data
import logo from "./../../../assets/websiteLogo/logo-primary.png";
import { navOptions } from "./../../../nativeData/navigationOptions";

const Header = () => {
  return (
    <header className="sticky w-full top-0 left-0 py-5">
      <InnerContainer>
        <div className="grid grid-cols-3 items-center">
          {/* website logo */}
          <div>
            <Brandlogo imageSource={logo} />
          </div>

          {/* desktop navbar */}
          <div className="justify-self-center">
            <LargeScreenNav navOptions={navOptions} />
          </div>

          {/* auth related options login/logout etc */}
          <div className="justify-self-end">
            <LinkBtn text="Login" />
          </div>
        </div>
      </InnerContainer>
    </header>
  );
};

export default Header;
