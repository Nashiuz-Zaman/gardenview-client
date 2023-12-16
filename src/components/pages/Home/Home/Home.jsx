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
import useMediaQueryContext from "../../../../hooks/useMediaQueryContext";

const Home = () => {
  // section ref
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const directionsRef = useRef(null);

  const { computerScreenMatches } = useMediaQueryContext();

  // observing feature
  const { shouldAnimate: featuresShouldAnimate } = useDetectElementIntersection(
    featuresRef,
    computerScreenMatches ? 0.5 : 0.2
  );

  // observing about section
  const { shouldAnimate: aboutShouldAnimate } = useDetectElementIntersection(
    aboutRef,
    computerScreenMatches ? 0.5 : 0.2
  );

  // observing about section
  const { shouldAnimate: directionsShouldAnimate } =
    useDetectElementIntersection(
      directionsRef,
      computerScreenMatches ? 0.5 : 0.2
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
      <section
        ref={directionsRef}
        id="directions"
        className="mb-sectionGapMd lg:mb-sectionGapLg"
      >
        <InnerContainer>
          <Directions shouldAnimate={directionsShouldAnimate} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
