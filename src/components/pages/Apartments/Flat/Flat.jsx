// react
import PropTypes from "prop-types";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

// react router
import { useNavigate } from "react-router-dom";

// hook
import useAuthProvider from "./../../../../hooks/useAuthProvider";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useFlatsAgreementsProvider from "../../../../hooks/useFlatsAgreementsProvider";

const Flat = ({ flatData }) => {
  // extract flat data
  const { _id, imageSource, floorNo, blockName, apartmentNo, rent, booked } =
    flatData;
  console.log(booked);
  const { refetchFlats, refetchAgreements } = useFlatsAgreementsProvider();

  // extract user data
  const { profileData } = useAuthProvider();

  // axios
  const axiosPrivate = useAxiosPrivate();

  // navigate
  const navigate = useNavigate();

  const handleRequestAgreement = async (e) => {
    e.preventDefault();
    if (!profileData) {
      navigate("/auth/login");
      return;
    }

    // date string for agreement req date
    const dateStr = `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`;

    // agreement object
    const agreementRequest = {
      name: profileData.name,
      email: profileData.email,
      flatId: _id,
      floorNo: floorNo,
      blockName: blockName,
      apartmentNo: apartmentNo,
      rent: rent,
      status: "pending",
      agreementReqDate: dateStr,
    };

    // call agreement api
    const { data } = await axiosPrivate.post("/agreements", agreementRequest);

    // if agreement request successfully sent then book the apartment and remove it from the list
    if (data.success) {
      refetchAgreements();

      // change to booked
      const updateData = { booked: true };
      const { data } = await axiosPrivate.patch(`/flats/${_id}`, updateData);
      if (data.success) {
        // remove the booked flat by refetching
        refetchFlats();
      }
    }
  };

  return (
    <div>
      {/* card image */}
      <div className="w-full aspect-video rounded-defaultLg overflow-hidden mb-5">
        <img src={imageSource} alt={`apartment at ${blockName}`} />
      </div>

      {/* text info */}
      <div className="space-y-1 mb-5">
        <p>
          <span className="font-bold">Block name:</span> {blockName}{" "}
        </p>
        <p>
          <span className="font-bold">Floor no:</span> {floorNo}{" "}
        </p>
        <p>
          <span className="font-bold">Apartment no:</span> {apartmentNo}{" "}
        </p>
        <p>
          <span className="font-bold">Rent:</span> {rent}{" "}
        </p>
      </div>

      {/* admins cannot view the book apartment button */}
      {/* agreement button */}
      {(!profileData || profileData.role !== "admin") && (
        <ButtonBtn
          disabled={booked ? true : false}
          text={booked ? "Already Booked" : "Book Apartment"}
          onClickFunction={handleRequestAgreement}
          modifyClasses="text-sm !rounded-default"
        />
      )}
    </div>
  );
};

Flat.propTypes = {
  flatData: PropTypes.object,
};

export default Flat;
