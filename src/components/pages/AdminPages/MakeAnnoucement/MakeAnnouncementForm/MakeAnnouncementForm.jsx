// react
import { useState } from "react";

// components
import ButtonBtn from "./../../../../shared/ButtonBtn/ButtonBtn";
import LoadingSpinner from "./../../../../shared/LoadingSpinner/LoadingSpinner";

// hooks
import useAxiosPrivate from "./../../../../../hooks/useAxiosPrivate";
import DashboardHeading from "../../../../shared/DashboardHeading/DashboardHeading";

const MakeAnnouncementForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    const data = {
      title,
      description,
    };

    const res = await axiosPrivate.post("/announcements", data);

    if (res.data.success) {
      setIsLoading(false);
      form.reset();
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
        clearTimeout(timer);
      }, 1500);
    }
  };

  // if loading show spinner
  if (isLoading) {
    return <LoadingSpinner text="Creating" />;
  }

  // if not loading show this part
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full md:w-[40rem] mx-auto p-4"
    >
      <DashboardHeading text="Create Annoucement" modifyClasses="mb-7" />

      {/* if success show this */}
      {showSuccess && (
        <p className="text-primary text-center">Created Successfully</p>
      )}

      {!showSuccess && (
        <>
          {/* title field */}
          <div className="mb-4">
            <input
              className={inputClasses}
              name="title"
              type="text"
              placeholder="Title"
              required
            />
          </div>

          {/* description field */}
          <div>
            <textarea
              className={`${inputClasses}`}
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>
        </>
      )}

      <ButtonBtn
        text="Create"
        modifyClasses="w-[10rem] mx-auto block mt-10 mb-4"
      />
    </form>
  );
};

export default MakeAnnouncementForm;
