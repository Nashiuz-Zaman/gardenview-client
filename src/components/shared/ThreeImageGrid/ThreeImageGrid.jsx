// react
import PropTypes from "prop-types";

const ThreeImageGrid = ({ imagesData, modifyClasses = "" }) => {
  const [image0, image1, image2] = imagesData;

  return (
    <div className={`w-full grid grid-cols-2 gap-2 ${modifyClasses}`}>
      {/* image 1 */}
      <div className="col-span-2 aspect-video">
        <img
          className="w-full h-full object-cover"
          src={image0.imageSource}
          alt={image0.alt}
        />
      </div>

      {/* image 2 */}
      <div className="aspect-video">
        <img
          className="w-full h-full object-cover"
          src={image1.imageSource}
          alt={image1.alt}
        />
      </div>

      {/* image 3 */}
      <div className="aspect-video">
        <img
          className="w-full h-full object-cover"
          src={image2.imageSource}
          alt={image2.alt}
        />
      </div>
    </div>
  );
};

ThreeImageGrid.propTypes = {
  imagesData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default ThreeImageGrid;
