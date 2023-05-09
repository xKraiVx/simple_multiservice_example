import { useContext } from "react";
import { ApiContext } from "../providers/api-provider";

export const useApiProvider = () => {
  const data = useContext(ApiContext);
  return data;
};
