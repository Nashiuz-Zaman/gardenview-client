// react
import { useEffect, useState } from "react";

//components
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import AllFlats from "../AllFlats/AllFlats";

// hooks
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

// tanstack
import { useQuery } from "@tanstack/react-query";
import PaginationButtons from "../../../shared/PaginationButtons/PaginationButtons";

const Apartments = () => {
  // current page for pagination and limit
  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const limit = 6;
  const skip = (curPage - 1) * limit;
  const axiosPublic = useAxiosPublic();

  const {
    data: flatsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["flats"],
    queryFn: async () => {
      const result = await axiosPublic.get(
        `/flats/?booked=false&skip=${skip}&limit=${limit}`
      );
      // find page count
      if (result.data.success) {
        setPageCount(Math.ceil(result.data.count / limit));
      }
      // return flats data array
      return result.data.flats;
    },
  });

  useEffect(() => {
    refetch();
  }, [curPage, refetch]);

  return (
    <div>
      <InnerContainer>
        {/* if loading show spinner or else show flats section */}
        {isLoading && <LoadingSpinner text="Flats Loading" />}

        {/* all flats section */}
        {!isLoading && flatsData && (
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
