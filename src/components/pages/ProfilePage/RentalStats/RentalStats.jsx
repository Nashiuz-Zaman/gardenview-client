// react
import PropTypes from "prop-types";

const RentalStats = ({ rentalInfo }) => {
  const { rentedApartments } = rentalInfo;

  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Apartments Rented</h2>

      {rentedApartments.length < 1 && <p>No apartments rented yet.</p>}

      {rentedApartments.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {rentedApartments.map((apartment, i) => {
            const {
              flatId,
              agreementRequestDate,
              agreementAcceptDate,
              floor,
              block,
              aptNo,
            } = apartment;

            return (
              <div className="space-y-1" key={i}>
                <p>
                  <span className="font-bold">Flat: </span>
                  {flatId}
                </p>
                <p>
                  <span className="font-bold">Agreement Requested On: </span>
                  {agreementRequestDate}
                </p>
                <p>
                  <span className="font-bold">Agreement Accepted On: </span>
                  {agreementAcceptDate}
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
            );
          })}
        </div>
      )}
    </div>
  );
};

RentalStats.propTypes = {
  rentalInfo: PropTypes.object,
};

export default RentalStats;
