// react
import PropTypes from "prop-types";

const GoogleMap = ({ modifyClasses = "" }) => {
  return (
    <div className={`w-full h-full ${modifyClasses}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57468.73135576404!2d-80.18134110655262!3d25.81031296395231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1701705919528!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

GoogleMap.propTypes = {
  modifyClasses: PropTypes.string,
};

export default GoogleMap;
