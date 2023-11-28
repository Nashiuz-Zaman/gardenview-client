// react imports
import { useEffect } from "react";

// react icons
import { IoCloudUpload } from "react-icons/io5";

// react router import
import { Link } from "react-router-dom";

// custom hooks import
import useRegistrationForm from "../../../../hooks/useRegistrationForm";

// shared component imports
import ButtonBtn from "./../../../shared/ButtonBtn/ButtonBtn";
import GoogleLoginBtn from "../../../shared/GoogleLoginBtn/GoogleLoginBtn";
import FileUploadBtn from "../../../shared/FileUploadBtn/FileUploadBtn";

const RegistrationForm = () => {
  const {
    registrationInfo,
    setRegistrationInfo,
    getUsername,
    getEmail,
    getPassword,
    getPhotoFile,
    handleSubmit,
    formSubmitted,
  } = useRegistrationForm();

  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      setRegistrationInfo({
        email: "",
        password: "",
        username: "",
        photoFile: "",
        showSuccessToast: false,
        errors: [],
      });
    };
  }, [setRegistrationInfo]);

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full md:w-[20rem] mx-auto p-4">
        {/* username field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            onChange={getUsername}
            type="text"
            id="username"
            value={registrationInfo.username}
            placeholder="username"
            required
          />
        </div>

        {/* photo upload button */}
        <div className="mb-4 grid grid-cols-2 items-center">
          <p>Your Photo</p>

          <FileUploadBtn onChange={getPhotoFile}>
            Browse <IoCloudUpload className="text-xl" />
          </FileUploadBtn>
        </div>

        {/* email field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            onChange={getEmail}
            type="email"
            id="email"
            value={registrationInfo.email}
            placeholder="email"
            required
          />
        </div>

        {/* password field */}
        <div>
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={registrationInfo.password}
            placeholder="password"
            required
          />
        </div>

        {/* show errors here */}
        {registrationInfo.errors.length > 0 && formSubmitted && (
          <div className="space-y-4 mt-4">
            {registrationInfo.errors.map((error) => {
              return (
                <p key={error} className="text-sm font-semibold text-red-600">
                  *{error}
                </p>
              );
            })}
          </div>
        )}

        <ButtonBtn text="Register" modifyClasses="w-full block mt-10 mb-4" />
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-primary font-semibold" to={"/auth/login"}>
            Log In
          </Link>
        </p>
      </form>

      <p className="text-center">Or</p>

      <GoogleLoginBtn
        text="Sign up with Google"
        onClickFunction={null}
        modifyClasses="w-max mx-auto mb-7"
      />
      <Link to="/" className="block text-primary text-center hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
};

export default RegistrationForm;
