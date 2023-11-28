// shared components
import LinkBtn from "../../shared/LinkBtn/LinkBtn";

const ErrorPage = () => {
  return (
    <div className="my-sectionGapLg">
      {/* error message */}
      <p className="text-center text-3xl font-semibold mb-4">
        Oops we have hit a dead end!
      </p>
      <p className="text-center text-3xl font-semibold">
        No resource found for this route.
      </p>

      {/* link to go back to home */}
      <LinkBtn text="Go to Home" url="/" modifyClasses="w-max mx-auto mt-8" />
    </div>
  );
};

export default ErrorPage;
