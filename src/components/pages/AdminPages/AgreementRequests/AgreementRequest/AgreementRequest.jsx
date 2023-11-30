// react
import PropTypes from "prop-types";
import ButtonBtn from "../../../../shared/ButtonBtn/ButtonBtn";

// a. User name
// b. User email
// c. Floor no
// d. Block name
// e. Room no
// f. Rent
// g. Agreement request date
// h. Accept button
// i. Reject button

const AgreementRequest = ({ agreementsData }) => {
  const {
    name,
    email,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    status,
    agreementReqDate,
  } = agreementsData;

  return (
    <div>
      <div className="space-y-2 mb-5">
        <p>
          <span className="font-bold">User Name: </span>
          {name}
        </p>
        <p>
          <span className="font-bold">User Email: </span>
          {email}
        </p>
        <p>
          <span className="font-bold">Floor No: </span>
          {floorNo}
        </p>
        <p>
          <span className="font-bold">Block Name: </span>
          {blockName}
        </p>
        <p>
          <span className="font-bold">Room No: </span>
          {apartmentNo}
        </p>
        <p>
          <span className="font-bold">Rent: </span>
          {rent}
        </p>
        <p>
          <span className="font-bold">Status: </span>
          {status === "pending" && (
            <span className="bg-orange-400 p-1 px-2 rounded-default text-white">
              {status}
            </span>
          )}
          {status === "checked" && (
            <span className="bg-green-600 p-1 px-2 rounded-default text-white">
              {status}
            </span>
          )}
        </p>
        <p>
          <span className="font-bold">Agreement Request Date: </span>
          {agreementReqDate}
        </p>
      </div>

      {/* buttons */}
      {status === "pending" && (
        <div className="flex items-center gap-2">
          <ButtonBtn text="Accept" modifyClasses="text-sm" />
          <ButtonBtn
            text="Reject"
            modifyClasses="text-sm bg-red-600 hover:bg-red-500 border border-red-600 hover:border-red-500"
          />
        </div>
      )}
    </div>
  );
};

AgreementRequest.propTypes = {
  agreementsData: PropTypes.object,
};

export default AgreementRequest;
