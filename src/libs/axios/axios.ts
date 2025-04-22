import Axios from "axios";

const axiosInstance = Axios.create({
  withCredentials: true,
  baseURL: "{BASE_URL_HERE}",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "{TOKEN_HERE}";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      location.replace("{REDIRECT_ROUTE_HERE}");
    }
    return Promise.reject(error);
  }
);

export const axios = axiosInstance;
