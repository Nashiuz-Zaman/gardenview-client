// react imports
import { useEffect } from "react";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

// hook
import useAuthProvider from "../../../../hooks/useAuthProvider";
import useLoginRegistrationProvider from "../../../../hooks/useLoginRegistrationProvider";
import RegistrationFormWithImage from "../RegistrationFormWithImage/RegistrationFormWithImage";

// data
import { authImage } from "./../../../../nativeData/textContent";

const Register = () => {
  const { appLoading } = useAuthProvider();
  const { setRegistrationInfo } = useLoginRegistrationProvider();

  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      setRegistrationInfo({
        showSuccessToast: false,
        errors: [],
      });
    };
  }, [setRegistrationInfo]);

  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapSm md:py-sectionGapMd lg:py-sectionGapSm">
      <div>
        <SectionHeading
          modifyClasses="mb-elementGapMd text-center"
          text="Welcome to Garden Views"
        />

        <div>
          <RegistrationFormWithImage
            imageSource={authImage}
            appLoading={appLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
