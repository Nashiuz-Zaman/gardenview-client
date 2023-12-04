// react
import { useState } from "react";

// react icons
import { IoCloudUpload } from "react-icons/io5";
import { IoEye, IoEyeOff } from "react-icons/io5";

// react router import
import { Link } from "react-router-dom";

// custom hooks import
import useRegistrationForm from "../../../../hooks/useRegistrationForm";
import useLoginForm from "../../../../hooks/useLoginForm";

// shared component imports
import ButtonBtn from "./../../../shared/ButtonBtn/ButtonBtn";
import GoogleLoginBtn from "../../../shared/GoogleLoginBtn/GoogleLoginBtn";
import FileUploadBtn from "../../../shared/FileUploadBtn/FileUploadBtn";

const RegistrationForm = () => {
  const { registrationInfo, handleSubmit } = useRegistrationForm();
  const [showPassword, setShowPassword] = useState(false);

  // take the google login function from login hook
  const { handleLoginGoogle } = useLoginForm();

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="w-full md:w-[20rem] mx-auto p-4"
      >
        {/* username field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            name="name"
            type="text"
            id="username"
            placeholder="username"
          />
        </div>

        {/* photo upload button */}
        <div className="mb-4 grid grid-cols-2 items-center">
          <p>Your Photo</p>

          <FileUploadBtn>
            Browse <IoCloudUpload className="text-xl" />
          </FileUploadBtn>
        </div>

        {/* email field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            type="email"
            id="email"
            name="email"
            placeholder="email"
          />
        </div>

        {/* password field */}
        <div className="relative">
          <input
            className={inputClasses}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="password"
          />

          {/* show/no show password buttons */}
          <button
            aria-label="Show or not show password button"
            type="button"
            className="block w-max absolute top-1/2 -translate-y-1/2 right-3 text-textPrimary"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? (
              <IoEyeOff className="text-xl" />
            ) : (
              <IoEye className="text-xl" />
            )}
          </button>
        </div>

        {/* show errors here */}
        {registrationInfo.errors.length > 0 && (
          <div className="space-y-4 mt-4">
            {registrationInfo.errors.map((error) => {
              return (
                <p
                  key={error}
                  className="text-sm text-center font-semibold text-red-600"
                >
                  * {error}
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
        onClickFunction={handleLoginGoogle}
        modifyClasses="w-max mx-auto mb-7"
      />
      <Link to="/" className="block text-primary text-center hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
};

export default RegistrationForm;
