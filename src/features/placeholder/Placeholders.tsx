import { AxiosProvider } from "@libs/axios";
import { AxiosInstanceBuilder } from "@libs/axios/context/AxiosInstanceBuilder";
import { PlaceholderList } from "./list";

export const Placeholders = () => {
  const axiosInstance = new AxiosInstanceBuilder({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" }
  }).build();

  return <AxiosProvider axiosInstance={axiosInstance}>
    <PlaceholderList />
  </AxiosProvider>;
};