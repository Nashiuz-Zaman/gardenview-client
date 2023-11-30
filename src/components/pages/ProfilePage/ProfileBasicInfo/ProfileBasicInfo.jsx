// react
import PropTypes from "prop-types";

const ProfileBasicInfo = ({ infoObject, modifyClasses = "" }) => {
  const { imageSource, name, email, role } = infoObject;

  return (
    <div
      className={`bg-lightGray rounded-2xl p-7 grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 items-stretch justify-items-center md:justify-items-start ${modifyClasses}`}
    >
      {/* image */}
      <div className="w-[10rem] border border-lightBorder aspect-square rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt="profile picture"
        />
      </div>

      {/* text information */}
      <div className="md:border-l md:border-lightBorder py-3 md:px-7 flex items-center">
        <div className="text-center md:text-left">
          {/* heading */}
          <h2 className="font-bold capitalize mb-2 text-xl">
            Profile ({role})
          </h2>

          {/* info */}

          <p className="font-medium">
            <span>Name:</span> {name}
          </p>
          <p className="font-medium">
            <span>Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

ProfileBasicInfo.propTypes = {
  infoObject: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default ProfileBasicInfo;
