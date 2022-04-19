import { ReactNode, useState } from "react";
import SearchContext from "./SearchContext";

const SearchDataProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        loading,
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchDataProvider;
