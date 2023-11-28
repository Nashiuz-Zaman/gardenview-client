// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import LoginForm from "./../LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <SectionHeading
          modifyClasses="text-primary mb-7 text-center"
          text="Welcome back!"
        />
        <h2 className="capitalize mb-2 text-center text-2xl">
          Login to your account
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
