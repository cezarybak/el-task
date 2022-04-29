import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const useSearchContext = () => {
  const data = useContext(SearchContext);

  if (data === undefined) {
    throw new Error(
      "useSearchContext must be used within SearchContextProvider"
    );
  }

  return data;
};

export default useSearchContext;
