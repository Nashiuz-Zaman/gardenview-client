// react
import PropTypes from "prop-types";

// component
import Flat from "../Flat/Flat";

const AllFlats = ({ flatsData, modifyClasses }) => {
  console.log(flatsData);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${modifyClasses}`}
    >
      {flatsData &&
        flatsData.map((flatData) => {
          return <Flat key={flatData._id} flatData={flatData} />;
        })}
    </div>
  );
};

AllFlats.propTypes = {
  flatsData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default AllFlats;
