import { createContext, ReactNode, useContext } from "react";
import { AxiosInstance } from "./AxiosInstanceBuilder";

export type AxiosContextValue = {
  axiosInstance: AxiosInstance;
};

export const AxiosContext = createContext<AxiosContextValue | undefined>(undefined);

export type AxiosContextProviderProps = {
  axiosInstance: AxiosInstance;
  children: ReactNode;
};

export const AxiosProvider = (props: AxiosContextProviderProps) => {
  const { axiosInstance, children } = props;

  return <AxiosContext.Provider value={{ axiosInstance }}>{children}</AxiosContext.Provider>;
};

export const useAxiosProvider = () => {
  const context = useContext(AxiosContext);

  if (context === undefined) {
    throw new Error("useAxiosProvider must be within AxiosProvider");
  }

  return context;
};
