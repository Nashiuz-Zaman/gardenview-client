// component
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// hooks
import useAuthProvider from "../../../hooks/useAuthProvider";

const Welcome = () => {
  const { user } = useAuthProvider();

  return (
    <div className="min-h-screen flex justify-center items-center px-10">
      <SectionHeading
        modifyClasses="!text-4xl font-bold text-center"
        text={`Welcome to your dashboard, ${user.displayName}`}
      />
    </div>
  );
};

export default Welcome;
