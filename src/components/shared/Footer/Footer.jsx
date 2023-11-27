// react
import PropTypes from "prop-types";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import Brandlogo from "../Brandlogo/Brandlogo";
import Address from "../Address/Address";
import ListOfLinks from "../ListOfLinks/ListOfLinks";

// react icons
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

// data
import logoWhite from "./../../../assets/websiteLogo/logo-white.png";
import { addressData, currentYear } from "../../../nativeData/addressData";
import { footerOptions } from "../../../nativeData/footerData";

const Footer = () => {
  return (
    <footer className="bg-black pt-sectionGapMd pb-8">
      <InnerContainer>
        {/* top part */}

        {/* website logo */}
        <Brandlogo
          imageSource={logoWhite}
          modifyClasses="mx-auto md:mx-0 mb-8"
        />

        {/* address and links */}
        <div className="mb-14 md:mb-sectionGapMd grid grid-cols-1 md:grid-cols-3">
          <Address
            addressData={addressData}
            modifyClasses="text-center md:text-left mb-14 md:mb-0"
          />

          {/* list of links */}
          <div className="justify-self-center mb-14 text-center md:text-left">
            <ListOfLinks linksData={footerOptions} />
          </div>

          {/* follow us social media */}
          <div className="justify-self-center">
            {/* social links heading */}
            <h3 className="text-white text-2xl font-medium text-center md:text-left mb-4 capitalize">
              Follow us
            </h3>

            {/* social media icons */}
            <div className="text-white text-2xl flex items-center gap-4">
              <a href="www.facebook.com">
                <FaFacebook />
              </a>
              <a href="www.twitter.com">
                <FaXTwitter />
              </a>
              <a href="www.instagram.com">
                <FaInstagram />
              </a>
              <a href="www.youtube.com">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* copyright part */}
        <div className="text-center">
          <small className="text-white">
            &copy; {currentYear} GardenView Heights, developed by Nashiuz Zaman
          </small>
        </div>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  addressData: PropTypes.object,
};

export default Footer;
