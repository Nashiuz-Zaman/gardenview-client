// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import GoogleLoginBtn from "../../../shared/GoogleLoginBtn/GoogleLoginBtn";

// custom hooks
import useLoginForm from "../../../../hooks/useLoginForm";

const LoginForm = () => {
  const { loginInfo, getEmail, getPassword, handleLogin, handleLoginGoogle } =
    useLoginForm();

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  return (
    <div>
      <form onSubmit={handleLogin} className="w-full md:w-[20rem] mx-auto p-4">
        {/* email field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            onChange={getEmail}
            type="email"
            id="email"
            value={loginInfo.email}
            placeholder="Your email"
            required
          />
        </div>

        {/* password field */}
        <div className="">
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={loginInfo.password}
            placeholder="Your password"
            required
          />
        </div>

        {/* show login errors here */}
        {loginInfo.error && (
          <p className="mt-4 text-red-600 font-medium text-center">
            {loginInfo.error}
          </p>
        )}

        <ButtonBtn text="Log In" modifyClasses="w-full block mt-10 mb-4" />
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary font-semibold" to={"/auth/register"}>
            Register
          </Link>
        </p>
      </form>

      <p className="text-center">Or</p>

      <GoogleLoginBtn
        onClickFunction={handleLoginGoogle}
        modifyClasses="w-max mx-auto mb-7"
      />

      <Link to="/" className="block text-primary text-center hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
};

export default LoginForm;
