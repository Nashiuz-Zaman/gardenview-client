// component
import Carousel1 from "../../../shared/Carousel1/Carousel1";
import LinkBtn from "../../../shared/LinkBtn/LinkBtn";

// data
import { homeTopCarouselData } from "../../../../nativeData/carouselData";
import { homeTopBannerTextContent } from "../../../../nativeData/textContent";

//hook
import useMediaQueryContext from "./../../../../hooks/useMediaQueryContext";
import Carousel2 from "../../../shared/Carousel2/Carousel2";

const BannerWithCarousel = () => {
  const { heading, subheading } = homeTopBannerTextContent;

  const {
    mobileMatches,
    smallTabletMatches,
    computerScreenMatches,
    largeTabletMatches,
  } = useMediaQueryContext();

  return (
    <div className="pb-8 lg:py-[5rem] relative">
      {/* design behind the main content */}
      <div className="absolute w-full lg:w-[65%] -z-10 h-[80%] sm:h-[70%] lg:h-full bg-black bottom-0 lg:top-0 right-0 rounded-2xl"></div>

      {/* main content */}
      <div className="grid grid-cols-1 grid-rows-[1fr_h-max] lg:grid-rows-1 lg:grid-cols-[1fr_1fr] 2xl:grid-cols-[1.10fr_1fr] 3xl:grid-cols-[1.25fr_1fr] gap-4 md:gap-8 lg:gap-10 2xl:gap-14 3xl:gap-14 items-center">
        {/* carousel */}
        <div className="w-[85%] mx-auto lg:w-full">
          {/* for small screens use this carousel2 */}
          {(mobileMatches || smallTabletMatches) && (
            <Carousel2 imagesData={homeTopCarouselData} />
          )}

          {/* for large screens use this carousel1 */}
          {(largeTabletMatches || computerScreenMatches) && (
            <Carousel1 imagesData={homeTopCarouselData} />
          )}
        </div>

        {/* banner */}
        <div className="p-3 2xsm:p-5 lg:p-0 lg:pr-2 xl:p-0 text-center lg:text-left">
          {/* main heading */}
          <h1 className="text-2xl xsm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5">
            {heading}
          </h1>

          {/* sub heading */}
          <p className="text-sm md:text-lg text-white mb-5 xsm:mb-7">
            {subheading}
          </p>

          {/*  buttons */}
          <div className="flex flex-col xsm:flex-row items-center gap-3 justify-center lg:justify-start">
            <LinkBtn text="Learn More" />
            <LinkBtn text="Browse Apartments" outlined={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithCarousel;
