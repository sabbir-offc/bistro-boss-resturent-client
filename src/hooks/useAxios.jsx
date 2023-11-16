import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  //request interceptors.
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return error;
    }
  );

  //response interceptors.
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      console.log("status error", error);
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
