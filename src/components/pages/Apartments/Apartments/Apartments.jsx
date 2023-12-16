//components
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import AllFlats from "../AllFlats/AllFlats";

// hooks
import useFlatsAgreementsProvider from "../../../../hooks/useFlatsAgreementsProvider";

// components
import PaginationButtons from "../../../shared/PaginationButtons/PaginationButtons";
import ToggleOption from "../../../shared/ToggleOption/ToggleOption";
import NoData from "../../../shared/NoData/NoData";

// data
import { apartmentStatusOptions } from "../../../../nativeData/textContent";

const Apartments = () => {
  const {
    curPage,
    setCurPage,
    pageCount,
    flatsData,
    flatsDataLoading,
    setApartmentStatus,
    apartmentStatus,
  } = useFlatsAgreementsProvider();

  return (
    <div>
      <InnerContainer>
        {/* toggle apartments section */}
        <section className="mb-sectionGapSm">
          <ToggleOption
            options={apartmentStatusOptions}
            labelText="Apartment Status"
            state={apartmentStatus}
            setState={setApartmentStatus}
          />
        </section>

        {/* if loading show spinner or else show flats section */}
        {flatsDataLoading && <LoadingSpinner text="Flats Loading" />}

        {!flatsDataLoading && flatsData.length < 1 && (
          <NoData text="No Flats to show in Selected Category" />
        )}

        {/* all flats section */}
        {!flatsDataLoading && flatsData.length > 0 && (
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
