// hooks
import useAuthProvider from "../../../hooks/useAuthProvider";

// components
import ProfileBasicInfo from "../../shared/ProfileBasicInfo/ProfileBasicInfo";
import RentalStats from "../../shared/RentalStats/RentalStats";

const MemberProfilePage = () => {
  const { user, userRole, profileData } = useAuthProvider();

  const profileBasicInfo = {
    name: user.displayName,
    imageSource: user.photoURL,
    email: user.email,
    role: userRole,
  };

  return (
    <div>
      <ProfileBasicInfo infoObject={profileBasicInfo} modifyClasses="mb-10" />
      <RentalStats rentalInfo={profileData} />
    </div>
  );
};

export default MemberProfilePage;
