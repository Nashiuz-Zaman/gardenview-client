import { useState } from "react";

const usePhotoGallery1 = () => {
  const [curImage, setCurImage] = useState(0);

  const handleImageSelection = (imageId) => {
    setCurImage(imageId);
  };

  return { curImage, handleImageSelection };
};

export default usePhotoGallery1;
