// axios
import axios from "axios";

// data
import { apiBaseURL } from "../nativeData/apiBase";

const axiosPublic = axios.create({
  baseURL: apiBaseURL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
