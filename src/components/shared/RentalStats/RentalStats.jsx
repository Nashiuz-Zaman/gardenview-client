// react
import PropTypes from "prop-types";

const RentalStats = ({ rentalInfo }) => {
  const {
    agreementDate,
    rentedApt: { floor, block, aptNo },
  } = rentalInfo;

  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Statistics</h2>

      <div>
        <p>
          <span className="font-bold">Agreement accept date: </span>
          {agreementDate}
        </p>
        <p>
          <span className="font-bold">Floor: </span>
          {floor}
        </p>
        <p>
          <span className="font-bold">Block: </span>
          {block}
        </p>
        <p>
          <span className="font-bold">Room no: </span>
          {aptNo}
        </p>
      </div>
    </div>
  );
};

RentalStats.propTypes = {
  rentalInfo: PropTypes.object,
};

export default RentalStats;
