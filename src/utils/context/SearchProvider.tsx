import { ReactNode, useState } from "react";
import SearchContext from "./SearchContext";

type Props = {
  children: ReactNode;
};

const SearchDataProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchDataProvider;
