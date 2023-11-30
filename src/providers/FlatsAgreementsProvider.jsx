// react
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// hook
import useAxiosPublic from "../hooks/useAxiosPublic";

// tanstack
import { useQuery } from "@tanstack/react-query";

// create the context
export const FlatsAgreementsContext = createContext();

const FlatsAgreementsProvider = ({ children }) => {
  // flats and pagination
  // current page for pagination and limit
  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const limit = 6;
  const skip = (curPage - 1) * limit;
  const axiosPublic = useAxiosPublic();

  // fetch flats data
  const {
    data: flatsData,
    isLoading: flatsDataLoading,
    refetch: refetchFlats,
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
    refetchFlats();
  }, [curPage, refetchFlats]);

  // agreement reqeusts

  // fetch agreements data
  const {
    data: agreementsData,
    isLoading: agreementsDataLoading,
    refetch: refetchAgreements,
  } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/agreements`);
      if (result.data.success) {
        return result.data.agreements;
      }
    },
  });

  const valueObj = {
    // flats related
    curPage,
    setCurPage,
    pageCount,
    flatsData,
    flatsDataLoading,
    refetchFlats,
    // agreements related
    agreementsData,
    agreementsDataLoading,
    refetchAgreements,
  };

  return (
    <FlatsAgreementsContext.Provider value={valueObj}>
      {children}
    </FlatsAgreementsContext.Provider>
  );
};

FlatsAgreementsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FlatsAgreementsProvider;
