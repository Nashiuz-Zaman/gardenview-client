// react
import PropTypes from "prop-types";

const GoogleMap = ({ modifyClasses = "" }) => {
  return (
    <div className={`w-full h-full ${modifyClasses}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.245763332907!2d90.40013466194961!3d23.789727992857177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1701089550382!5m2!1sen!2sbd"
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
