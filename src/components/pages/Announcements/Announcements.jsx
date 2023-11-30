// tanstack
import { useQuery } from "@tanstack/react-query";

// component
import DashboardHeading from "../../shared/DashboardHeading/DashboardHeading";
import SingleAnnouncement from "./SingleAnnouncement/SingleAnnouncement";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

// hooks
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Announcements = () => {
  const axiosPublic = useAxiosPublic();

  const { data: announcementsData, isLoading } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic("/announcements");

      if (res.data.success) {
        return res.data.announcements;
      }
    },
  });

  return (
    <div>
      <section>
        <DashboardHeading text="Current Announcements" modifyClasses="mb-7" />

        {isLoading && <LoadingSpinner />}

        {!isLoading && announcementsData && (
          <div className="space-y-4">
            {announcementsData.map((announcement) => {
              return (
                <SingleAnnouncement
                  key={announcement._id}
                  announcementData={announcement}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Announcements;
