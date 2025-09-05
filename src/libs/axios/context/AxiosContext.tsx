import { createContext, ReactNode } from "react";

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
