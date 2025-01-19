import { useContext } from "react";
import { DashboardContext } from "./context";

export const useDashboardContext = () => {
  const data = useContext(DashboardContext);
  if (!data) throw Error("Use hook inside the context!!!");
  return data;
};
