// react
import PropTypes from "prop-types";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

const Flat = ({ flatData }) => {
  const { imageSource, floorNo, blockName, apartmentNo, rent } = flatData;

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

      {/* agreement button */}
      <ButtonBtn
        text="Request Agreement"
        onClickFunction={null}
        modifyClasses="text-sm !rounded-default"
      />
    </div>
  );
};

Flat.propTypes = {
  flatData: PropTypes.object,
};

export default Flat;
