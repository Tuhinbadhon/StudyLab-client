import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://studylab-ass11.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
