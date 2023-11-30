// axios
import axios from "axios";

// data
import { apiBaseURL } from "../nativeData/apiBase";

const axiosPrivate = axios.create({
  baseURL: apiBaseURL,
});

const useAxiosPrivate = () => {
  axiosPrivate.interceptors.request.use(
    function (config) {
      console.log("im inside interceptor");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};

export default useAxiosPrivate;
