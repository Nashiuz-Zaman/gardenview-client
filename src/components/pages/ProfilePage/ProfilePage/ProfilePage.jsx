// hooks
import useAuthProvider from "../../../../hooks/useAuthProvider";

// components
import RentalStats from "../RentalStats/RentalStats";
import ProfileBasicInfo from "../ProfileBasicInfo/ProfileBasicInfo";

const ProfilePage = () => {
  const { user, profileData } = useAuthProvider();

  const profileBasicInfo = {
    name: user.displayName,
    imageSource: user.photoURL,
    email: user.email,
    role: profileData.role,
  };

  if (profileData) {
    return (
      <div>
        <ProfileBasicInfo infoObject={profileBasicInfo} modifyClasses="mb-10" />

        {profileData.role !== "admin" && (
          <RentalStats rentalInfo={profileData} />
        )}
      </div>
    );
  }
};

export default ProfilePage;
