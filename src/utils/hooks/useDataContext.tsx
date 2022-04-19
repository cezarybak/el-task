import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const useDataContext = () => {
  const data = useContext(SearchContext);
  return data;
};

export default useDataContext;
