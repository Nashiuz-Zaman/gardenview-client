// react
import PropTypes from "prop-types";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import PhotoGallery1 from "../../../shared/PhotoGallery1/PhotoGallery1";

// data
import { galleryContent } from "../../../../nativeData/textContent";
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";

const Gallery = ({ shouldAnimate }) => {
  const { heading, imagesData } = galleryContent;

  return (
    <div className="bg-gradient-to-br from-black to-textPrimary py-sectionGapMd">
      <InnerContainer>
        <div className={`${shouldAnimate}`}>
          <SectionHeading
            text={heading}
            modifyClasses="mb-5 lg:mb-16 text-white"
          />
        </div>

        <div className={` ${shouldAnimate}`}>
          <PhotoGallery1 imagesData={imagesData} />
        </div>
      </InnerContainer>
    </div>
  );
};

Gallery.propTypes = {
  shouldAnimate: PropTypes.bool,
};

export default Gallery;
