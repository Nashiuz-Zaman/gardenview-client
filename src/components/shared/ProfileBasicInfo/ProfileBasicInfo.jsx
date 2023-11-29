// react
import PropTypes from "prop-types";

const ProfileBasicInfo = ({ infoObject, modifyClasses = "" }) => {
  const { imageSource, name, email, role } = infoObject;

  return (
    <div
      className={`bg-lightGray rounded-2xl p-7 grid grid-cols-2 md:grid-cols-2 items-stretch ${modifyClasses}`}
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
      <div className="border-l border-lightBorder py-3 px-7 flex items-center">
        <div>
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
