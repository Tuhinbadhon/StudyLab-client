import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://b9a11server-site.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
