// react imports
import PropTypes from "prop-types";
import { useState } from "react";

// component
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// react router import
import { Link } from "react-router-dom";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ authUser }) => {
  // hover state
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  // function to control info panel
  const handleShowInfoPanel = () => {
    setShowInfoPanel((prev) => {
      return !prev;
    });
  };

  // declare name and photo variables
  let name, photoURL;

  if (authUser) {
    // assign name and photo variables
    name = authUser.displayName;
    photoURL = authUser.photoURL;

    return (
      <div className="w-[2.5rem] cursor-pointer relative">
        {/* profile image container div */}
        <div
          onClick={handleShowInfoPanel}
          className="w-full h-full aspect-square border border-[#ddd]  rounded-full overflow-hidden"
        >
          {/* if no photo provided show default silhoutte photo */}
          {!photoURL && (
            <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
          )}

          {/* if there is photo show this part */}
          {photoURL !== null && (
            <img
              className="w-full h-full object-cover"
              src={photoURL}
              alt="user image"
            />
          )}
        </div>

        {/* positioned div for display name */}
        <div
          className={`rounded-defaultLg w-max bg-white border border-[#e5e5e5] shadow-xl p-4 absolute top-0 right-0 -translate-x-[1.5rem] translate-y-[2rem] transition-all duration-150 space-y-5 text-left cursor-default ${
            showInfoPanel ? "opacity-100 visible" : "opacity-0 collapse"
          }`}
        >
          <p>{name}</p>
          <Link className="block">Dashboard</Link>
          <ButtonBtn
            text="Log Out"
            modifyClasses="!p-0 bg-transparent !text-textPrimary border-0 hover:bg-transparent !text-base !text-left !w-full"
          />
        </div>
      </div>
    );
  }
};

UserProfile.propTypes = {
  authUser: PropTypes.object,
  justImage: PropTypes.bool,
};

export default UserProfile;
