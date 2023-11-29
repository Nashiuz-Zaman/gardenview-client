// hooks
import useAuthProvider from "../../../hooks/useAuthProvider";

// components
import ProfileBasicInfo from "../../shared/ProfileBasicInfo/ProfileBasicInfo";

const UserProfilePage = () => {
  const { user, userRole } = useAuthProvider();

  const profileBasicInfo = {
    name: user.displayName,
    imageSource: user.photoURL,
    email: user.email,
    role: userRole,
  };

  return (
    <div>
      <ProfileBasicInfo infoObject={profileBasicInfo} />
    </div>
  );
};

export default UserProfilePage;
