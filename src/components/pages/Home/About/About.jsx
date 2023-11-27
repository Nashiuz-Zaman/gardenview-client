// react
import PropTypes from "prop-types";

// components
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

// data
import { aboutContent } from "../../../../nativeData/textContent";
import ThreeImageGrid from "../../../shared/ThreeImageGrid/ThreeImageGrid";
import Description from "../../../shared/Description/Description";

const About = ({ shouldAnimate }) => {
  const { heading, images, descriptions } = aboutContent;

  return (
    <div className="relative">
      {/* black design div */}
      <div
        className={`bg-black w-[5rem] hidden md:block md:w-[7rem] lg:w-[10rem] md:h-[90%] lg:h-[80%] xl:h-[90%] 3xl:h-full absolute top-1/2 -translate-y-1/2 left-0 lg:left-[6%] 3xl:left-[7%] -z-10 ${
          shouldAnimate ? "visible" : "visible"
        }`}
      ></div>

      <InnerContainer>
        <div className="pl-[0rem] md:pl-0 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-10 xl:gap-[6rem] items-center">
          {/* pictures */}
          <ThreeImageGrid
            imagesData={images}
            modifyClasses=" md:border-[1rem] lg:border-x-0 md:border-white bg-white lg:gap-4"
          />

          {/* text part */}
          <div className="bg-primaryLight rounded-2xl p-6 lg:p-10 xl:p-sectionGapSm 2xl:p-sectionGapMd">
            {/* heading */}
            <SectionHeading
              text={heading}
              modifyClasses="text-left text-white mb-3 lg:!mb-8 md:!text-3xl 2md:!text-4xl lg:!text-5xl xl:!text-6xl"
            />

            {/* description */}
            <div className="space-y-3 xl:space-y-6">
              {descriptions.map((description) => {
                const { id, text } = description;

                return (
                  <Description
                    key={id}
                    text={text}
                    modifyClasses="text-white"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

About.propTypes = {
  shouldAnimate: PropTypes.bool,
};

export default About;
