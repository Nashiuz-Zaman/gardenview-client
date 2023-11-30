//components
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import AllFlats from "../AllFlats/AllFlats";

// hooks
import useFlatsAgreementsProvider from "../../../../hooks/useFlatsAgreementsProvider";

// components
import PaginationButtons from "../../../shared/PaginationButtons/PaginationButtons";

const Apartments = () => {
  const { curPage, setCurPage, pageCount, flatsData, flatsDataLoading } =
    useFlatsAgreementsProvider();

  return (
    <div>
      <InnerContainer>
        {/* if loading show spinner or else show flats section */}
        {flatsDataLoading && <LoadingSpinner text="Flats Loading" />}

        {/* all flats section */}
        {!flatsDataLoading && flatsData && (
          <section className="mb-sectionGapMd lg:mb-sectionGapLg">
            <AllFlats flatsData={flatsData} modifyClasses="mb-sectionGapMd" />

            <PaginationButtons
              pageCount={pageCount}
              curPage={curPage}
              setCurPage={setCurPage}
            />
          </section>
        )}
      </InnerContainer>
    </div>
  );
};

export default Apartments;
