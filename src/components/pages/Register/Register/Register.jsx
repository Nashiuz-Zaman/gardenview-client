// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <SectionHeading
          modifyClasses="text-primary mb-7 text-center"
          text="Welcome to Garden Views"
        />
        <h2 className="capitalize mb-2 text-center text-2xl">
          Register your account
        </h2>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;
