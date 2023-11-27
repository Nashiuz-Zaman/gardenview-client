// react
import PropTypes from "prop-types";

// components
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import Carousel3 from "../../../shared/Carousel3/Carousel3";

// data
import { featuresTextContent } from "../../../../nativeData/textContent";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import Description from "../../../shared/Description/Description";
import ListOfTextUnordered from "../../../shared/ListOfTextUnordered/ListOfTextUnordered";

const Features = ({ shouldAnimate = false }) => {
  // extract data
  const { heading, description, features, images } = featuresTextContent;

  return (
    <div className="relative">
      {/* green design div */}
      <div
        className={`w-4/6 ml-auto h-[5rem] md:h-[7rem] lg:h-[10rem] bg-gradient-to-r from-primaryLight to-primary duration-1000 ${
          shouldAnimate ? "visible-left" : "invisible-left"
        }`}
      ></div>
      {/* black design div */}
      <div
        className={`bg-black w-[5rem] md:w-[7rem] lg:w-[10rem] h-full lg:h-[105%] absolute top-0 lg:-top-[5%] right-0 lg:right-[5%] -z-10 ${
          shouldAnimate ? "visible-top" : "invisible-top"
        }`}
      ></div>

      {/* main content */}
      <InnerContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-7 sm:gap-10 lg:gap-16 py-7 md:py-10 lg:py-14 pr-[5rem] sm:pr-0">
          {/* text content part */}
          <div className={shouldAnimate ? "visible-left" : "invisible-left"}>
            {/* heading */}
            <SectionHeading text={heading} modifyClasses="mb-5 lg:mb-8" />

            <div className="grid grid-cols-1 gap-5 xsm:grid-cols-2 sm:grid-cols-1 ">
              {/* description */}
              <Description text={description} />

              {/* list of features */}
              <ListOfTextUnordered
                textArray={features}
                modifyClasses="!leading-[1.5]"
              />
            </div>
          </div>

          {/* carousel part */}
          <div
            className={`w-full lg:w-[85%] xl:ml-5 3xl:ml-0 3xl:justify-self-end 3xl:mr-[7%] ${
              shouldAnimate ? "visible-left" : "invisible-left"
            }`}
          >
            <Carousel3
              imagesData={images}
              shouldStart={shouldAnimate ? true : false}
            />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

Features.propTypes = {
  shouldAnimate: PropTypes.bool,
};

export default Features;
