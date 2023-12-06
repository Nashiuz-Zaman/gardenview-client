// react imports
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoEye, IoEyeOff } from "react-icons/io5";

// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import GoogleLoginBtn from "../../../shared/GoogleLoginBtn/GoogleLoginBtn";

// custom hooks
import useLoginForm from "../../../../hooks/useLoginForm";

const LoginForm = ({ modifyClasses }) => {
  const { loginInfo, handleLogin, handleLoginGoogle } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  console.log(loginInfo);

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  return (
    <div className={`w-full md:w-[22rem] mx-auto p-10 ${modifyClasses}`}>
      <h2 className="capitalize mb-elementGapSm text-center text-2xl">
        Login to your account
      </h2>
      <form noValidate onSubmit={handleLogin} className="w-full">
        {/* email field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        {/* password field */}
        <div className="relative">
          <input
            className={inputClasses}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
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

        {loginInfo.errors.length > 0 && (
          <div className="space-y-1 mt-4">
            {loginInfo.errors.map((error) => {
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

        <ButtonBtn text="Log In" modifyClasses="w-full block mt-10 mb-4" />
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary font-semibold" to={"/auth/register"}>
            Register
          </Link>
        </p>
      </form>

      <p className="text-center my-5">Or</p>

      <GoogleLoginBtn
        onClickFunction={handleLoginGoogle}
        modifyClasses="w-max mx-auto mb-7"
      />

      <Link to="/" className="block text-primary text-center hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

LoginForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default LoginForm;
