// react
import { useEffect } from "react";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../../containers/InnerContainer/InnerContainer";

// hooks
import useAuthProvider from "../../../../hooks/useAuthProvider";
import useLoginRegistrationProvider from "../../../../hooks/useLoginRegistrationProvider";

// data
import { authImage } from "./../../../../nativeData/textContent";
import LoginFormWithImage from "../LoginFormWithImage/LoginFormWithImage";

const Login = () => {
  const { appLoading } = useAuthProvider();
  const { setLoginInfo } = useLoginRegistrationProvider();

  useEffect(() => {
    return () => {
      setLoginInfo({
        showSuccessToast: false,
        errors: [],
      });
    };
  }, [setLoginInfo]);

  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapSm md:py-sectionGapMd lg:py-sectionGapSm">
      <InnerContainer>
        <div>
          <SectionHeading
            modifyClasses="mb-elementGapMd text-center"
            text="Welcome Back"
          />

          <div>
            <LoginFormWithImage
              imageSource={authImage}
              appLoading={appLoading}
            />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

export default Login;
