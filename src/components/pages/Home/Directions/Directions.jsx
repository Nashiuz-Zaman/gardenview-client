// react
import PropTypes from "prop-types";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../../containers/InnerContainer/InnerContainer";
import Description from "../../../shared/Description/Description";

// react icons
import { MdDirections } from "react-icons/md";

// data
import { directionsContent } from "../../../../nativeData/textContent";
import GoogleMap from "../../../shared/GoogleMap/GoogleMap";

const Directions = ({ shouldAnimate }) => {
  const { heading, directions } = directionsContent;

  return (
    <div
      className={`bg-primaryLight py-7 px-6 lg:px-0 md:py-10 lg:py-sectionGapMd ${shouldAnimate}`}
    >
      <InnerContainer>
        {/* heading */}
        <SectionHeading
          text={heading}
          modifyClasses="text-white text-center capitalize mb-5 md:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-10 lg:gap-20 items-center">
          {/* directions text part */}
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-5">
              <h3 className="text-white text-lg md:text-2xl font-semibold">
                Directions
              </h3>
              <MdDirections className="text-white text-2xl" />
            </div>
            <Description text={directions} modifyClasses="text-white" />
          </div>

          {/* google map  */}
          <div className="w-full 2md:w-[80%] lg:w-[70%] justify-self-center">
            <GoogleMap modifyClasses="aspect-square" />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

Directions.propTypes = {
  shouldAnimate: PropTypes.bool,
};

export default Directions;
