import { useContext } from "react";

import { AxiosContext } from "@libs/axios";

export const useAxiosProvider = () => {
  const context = useContext(AxiosContext);

  if (context === undefined) {
    throw new Error("useAxiosProvider must be within AxiosProvider");
  }

  return context;
};
