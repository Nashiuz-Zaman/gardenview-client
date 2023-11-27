// react
import { useRef } from "react";

// component
import BannerWithCarousel from "../BannerWithCarousel/BannerWithCarousel";
import Features from "../Features/Features";
import About from "../About/About";
import Directions from "../Directions/Directions";
import InnerContainer from "./../../../containers/InnerContainer/InnerContainer";

// hooks
import useDetectElementIntersection from "../../../../hooks/useDetectElementIntersection";

const Home = () => {
  // section ref
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);

  // observing feature
  const { shouldAnimate: featuresShouldAnimate } = useDetectElementIntersection(
    featuresRef,
    1
  );

  // observing about section
  const { shouldAnimate: aboutShouldAnimate } = useDetectElementIntersection(
    aboutRef,
    0.3
  );

  return (
    <div>
      {/* banner section */}
      <section className="mb-sectionGapMd lg:mb-sectionGapXl">
        <InnerContainer>
          <BannerWithCarousel />
        </InnerContainer>
      </section>

      {/* features section */}
      <section
        id="features"
        ref={featuresRef}
        className="mb-sectionGapMd lg:mb-sectionGapLg"
      >
        <Features shouldAnimate={featuresShouldAnimate} />
      </section>

      {/* about section */}
      <section ref={aboutRef} className="mb-sectionGapMd lg:mb-sectionGapLg">
        <About shouldAnimate={aboutShouldAnimate} />
      </section>

      {/* directions section */}
      <section id="directions" className="mb-sectionGapMd lg:mb-sectionGapLg">
        <Directions />
      </section>
    </div>
  );
};

export default Home;
