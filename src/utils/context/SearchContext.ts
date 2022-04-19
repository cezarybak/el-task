import { createContext, Dispatch, SetStateAction } from "react";
import { NodeType } from "../../types/SearchList";

export type DataType = {
  count: number;
  items: { node: NodeType }[] | [];
};

type SearchContextType = {
  setSearch?: Dispatch<SetStateAction<string>>;
  loading: boolean;
  count?: DataType["count"];
  items?: DataType["items"];
};

const SearchContext = createContext<SearchContextType>({
  setSearch: undefined,
  loading: false,
  count: 0,
  items: [],
});

export default SearchContext;
