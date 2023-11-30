// component
import MakeAnnouncementForm from "./MakeAnnouncementForm/MakeAnnouncementForm";

const MakeAnnouncement = () => {
  return (
    <div>
      {/* create announcement section */}
      <section className="pt-sectionGapMd mb-sectionGapMd lg:mb-sectionGapLg">
        {/* form for creating announcement */}
        <MakeAnnouncementForm />
      </section>
    </div>
  );
};

export default MakeAnnouncement;
