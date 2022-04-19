import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const useSearchContext = () => {
  const data = useContext(SearchContext);
  return data;
};

export default useSearchContext;
