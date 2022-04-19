import { createContext, Dispatch, SetStateAction } from "react";

type SearchContextType = {
  search: string;
  setSearch?: Dispatch<SetStateAction<string>>;
  loading: boolean;
};

const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: undefined,
  loading: false,
});

export default SearchContext;
