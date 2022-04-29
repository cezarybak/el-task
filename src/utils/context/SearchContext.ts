import { createContext, Dispatch, SetStateAction } from "react";
import { Repo, User } from "../../types/SearchList";

export type DataType = {
  count: number;
  items: { node: User | Repo }[] | [];
};

type SearchContextType = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
