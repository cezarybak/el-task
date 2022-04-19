import { ReactNode, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import SearchContext from "./SearchContext";

const SearchDataProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const debounceSearch = useDebounce(search, 500);

  return (
    <SearchContext.Provider
      value={{
        loading,
        search: debounceSearch,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchDataProvider;
