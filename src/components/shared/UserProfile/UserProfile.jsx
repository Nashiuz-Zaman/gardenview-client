// react imports
import PropTypes from "prop-types";
import { useState } from "react";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ authUser }) => {
  // hover state
  const [hovered, setHovered] = useState(false);

  const handleHoverEnter = () => {
    setHovered(true);
  };

  const handleHoverLeave = () => {
    setHovered(false);
  };

  // declare name and photo variables
  let name, photoURL;

  if (authUser) {
    // assign name and photo variables
    name = authUser.displayName;
    photoURL = authUser.photoURL;

    return (
      <div
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        className="w-[2.5rem] cursor-pointer relative"
      >
        {/* profile image container div */}
        <div className="w-full h-full aspect-square border border-[#ddd]  rounded-full overflow-hidden">
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
          className={`rounded-full w-max bg-white border border-[#ddd] py-2 px-4 absolute bottom-0 right-0 -translate-x-[2rem] translate-y-[2rem] transition-all duration-200 ${
            hovered ? "opacity-100 visible" : "opacity-0 collapse"
          }`}
        >
          <p>{name}</p>
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
