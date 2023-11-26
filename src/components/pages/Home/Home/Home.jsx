// component
import BannerWithCarousel from "../BannerWithCarousel/BannerWithCarousel";
import InnerContainer from "./../../../containers/InnerContainer/InnerContainer";

const Home = () => {
  return (
    <div>
      <section className="mb-sectionGapMd">
        <InnerContainer>
          <BannerWithCarousel />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
