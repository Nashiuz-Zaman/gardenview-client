// react
import { useState, useEffect, useRef } from "react";

// component
import BannerWithCarousel from "../BannerWithCarousel/BannerWithCarousel";
import Features from "../Features/Features";
import About from "../About/About";
import InnerContainer from "./../../../containers/InnerContainer/InnerContainer";

// hooks
import useIntersectionObserver from "./../../../../hooks/useIntersectionObserver";

const Home = () => {
  // should features section animate?
  const [featuresAnimate, setFeaturesAnimate] = useState(false);

  // features section ref
  const featuresRef = useRef(null);

  // observe features section and get entry
  const { entry: featuresEntry, observer: featuresObserver } =
    useIntersectionObserver(featuresRef, 0.5);

  // process of observing features section
  useEffect(() => {
    if (featuresEntry !== null) {
      if (featuresEntry.isIntersecting === true) {
        setFeaturesAnimate(true);
        featuresObserver.unobserve(featuresEntry.target);
      }
    }
  }, [featuresEntry, featuresObserver]);

  return (
    <div>
      {/* banner section */}
      <section className="mb-sectionGapMd lg:mb-sectionGapXl">
        <InnerContainer>
          <BannerWithCarousel />
        </InnerContainer>
      </section>

      {/* features section */}
      <section ref={featuresRef} className="mb-sectionGapMd lg:mb-sectionGapLg">
        <Features shouldAnimate={featuresAnimate} />
      </section>

      {/* about section */}
      <section className="mb-sectionGapMd lg:mb-sectionGapLg">
        <About />
      </section>
    </div>
  );
};

export default Home;
