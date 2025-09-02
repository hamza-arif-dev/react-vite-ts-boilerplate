import { useAxiosProvider } from "@libs/axios/context";

export const useAxiosInstance = () => {
  const { axiosInstance } = useAxiosProvider();

  if (axiosInstance === undefined) {
    throw new Error("useAxiosInstance must be within AxiosProvider");
  }
  return axiosInstance;
};
