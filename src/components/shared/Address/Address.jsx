// react import
import PropTypes from "prop-types";

function Address({ addressData = {}, modifyClasses = "" }) {
  const { addressDetails, phone, email } = addressData;

  return (
    <address className={`not-italic text-white ${modifyClasses}`}>
      <div className="mb-3">
        {addressDetails.map((single, i) => {
          return <p key={i}>{single}</p>;
        })}
      </div>

      <div>
        <h4>Contact us</h4>

        <div>
          <a className="block" href={`tel:${phone}`}>
            {phone}
          </a>
          <a className="block" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </address>
  );
}

Address.propTypes = {
  addressData: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default Address;
