// react
import PropTypes from "prop-types";

const SingleAnnouncement = ({ announcementData, modifyClasses = "" }) => {
  const { title, description } = announcementData;
  return (
    <div className={`${modifyClasses}`}>
      <h3 className="font-bold capitalize mb-1 text-lg">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

SingleAnnouncement.propTypes = {
  announcementData: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default SingleAnnouncement;
