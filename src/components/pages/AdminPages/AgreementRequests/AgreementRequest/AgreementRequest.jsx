// react
import PropTypes from "prop-types";
import ButtonBtn from "../../../../shared/ButtonBtn/ButtonBtn";

// hook
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useFlatsAgreementsProvider from "../../../../../hooks/useFlatsAgreementsProvider";

const AgreementRequest = ({ agreementsData }) => {
  const {
    _id,
    name,
    email,
    floorNo,
    flatId,
    blockName,
    apartmentNo,
    rent,
    status,
    agreementReqDate,
  } = agreementsData;

  const { refetchAgreements, refetchFlats } = useFlatsAgreementsProvider();

  // extract the axios private function from hook
  const axiosPrivate = useAxiosPrivate();

  const handleAccept = async (e) => {
    e.preventDefault();

    // step 1: update the agreement to checked
    const update = { status: "checked" };
    const res = await axiosPrivate.patch(`/agreements/${_id}`, update);

    if (res.data.success) {
      // step 2: refetch agreements
      refetchAgreements();

      // date string for agreement accept date
      const dateStr = `${new Date().getDate()}-${
        new Date().getMonth() + 1
      }-${new Date().getFullYear()}`;

      // step 3 update the user to member
      // since accepted user data has to change
      const updatedUser = {
        role: "member",
        newlyRentedApartment: {
          flatId: flatId,
          agreementRequestDate: agreementReqDate,
          agreementAcceptDate: dateStr,
          floor: floorNo,
          block: blockName,
          aptNo: apartmentNo,
        },
      };

      const res = await axiosPrivate.patch(`/users/${email}`, updatedUser);

      if (res.data.success) {
        console.log("user has been updated");
      }
    }
  };

  const handleReject = async (e) => {
    e.preventDefault();
    // step 1: update the agreement to checked
    const update = { status: "checked" };
    const res = await axiosPrivate.patch(`/agreements/${_id}`, update);
    if (res.data.success) {
      // step 2: refetch agreements
      refetchAgreements();
      // step 3: update flat to booked false
      const updatedFlat = { booked: false };

      const res = await axiosPrivate.patch(`/flats/${flatId}`, updatedFlat);
      if (res.data.success) {
        refetchFlats();
        console.log("flat not booked anymore");
      }
    }
  };

  return (
    <div className="bg-lightGray p-6 rounded-defaultLg">
      <div className="space-y-2">
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
        <div className="flex items-center gap-2 mt-5">
          <ButtonBtn
            text="Accept"
            modifyClasses="text-sm"
            onClickFunction={handleAccept}
          />
          <ButtonBtn
            onClickFunction={handleReject}
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
