// hooks
import useAuthProvider from "../../../../hooks/useAuthProvider";

// components
import RentalStats from "../RentalStats/RentalStats";
import ProfileBasicInfo from "../ProfileBasicInfo/ProfileBasicInfo";

const ProfilePage = () => {
  const { profileData } = useAuthProvider();

  const profileBasicInfo = {
    name: profileData.name,
    imageSource: profileData.imageSource,
    email: profileData.email,
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
