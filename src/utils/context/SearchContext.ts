import { createContext, Dispatch, SetStateAction } from "react";
import { NodeType } from "../../types/SearchList";

export type DataType = {
  count: number;
  items: { node: NodeType }[] | [];
};

type SearchContextType = {
  setSearch?: Dispatch<SetStateAction<string>>;
  search: string;
};

const SearchContext = createContext<SearchContextType>({
  setSearch: undefined,
  search: "",
});

export default SearchContext;
