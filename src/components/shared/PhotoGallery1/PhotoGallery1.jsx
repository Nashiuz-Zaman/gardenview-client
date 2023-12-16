// react
import PropTypes from "prop-types";

// hooks
import usePhotoGallery1 from "./usePhotoGallery1";

const PhotoGallery1 = ({ imagesData, modifyClasses = "" }) => {
  const { curImage, handleImageSelection } = usePhotoGallery1();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-elementGapMd ${modifyClasses}`}
    >
      {/* single image part */}
      <div className="w-full aspect-video relative">
        {imagesData &&
          imagesData.map((imageData) => {
            const { id, imageSource } = imageData;

            return (
              <div
                key={id}
                className={`w-full aspect-video absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 overflow-hidden  shadow-large transition-all duration-500 ${
                  id === curImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={imageSource}
                  alt="large single photo"
                />
              </div>
            );
          })}
      </div>

      {/* all images grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {imagesData &&
          imagesData.map((imageData) => {
            const { id, imageSource } = imageData;

            return (
              <div
                onClick={() => {
                  handleImageSelection(id);
                }}
                role="button"
                key={id}
                className="w-full aspect-video cursor-pointer relative"
              >
                <img
                  className="w-full h-full object-cover shadow-md"
                  src={imageSource}
                  alt="gallery photo"
                />

                {/* overlay */}
                <div
                  className={`w-full h-full absolute top-0 left-0 transition-all duration-500 bg-[rgba(0,0,0,0.7)] ${
                    id === curImage ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

PhotoGallery1.propTypes = {
  imagesData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default PhotoGallery1;
