import { ReactNode, useEffect, useState } from "react";
import { client } from "../../graphql/apollo-client";
import { SearchList } from "../../graphql/operations/queries";
import { SearchListData, SearchListVars } from "../../types/SearchList";
import SearchContext, { DataType } from "./SearchContext";

const SearchDataProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | DataType>(undefined);

  useEffect(() => {
    (async () => {
      setLoading(true);
      Promise.all([
        await client.query<SearchListData, SearchListVars>({
          query: SearchList,
          variables: {
            queryString: search || "KurA",
            first: 15,
            type: "USER",
          },
        }),

        await client.query<SearchListData, SearchListVars>({
          query: SearchList,
          variables: {
            queryString: search || "KurA",
            first: 15,
            type: "REPOSITORY",
          },
        }),
      ]).then((e) => {
        setData(
          e
            .map((e) => {
              return {
                count: e.data.search.repositoryCount || e.data.search.userCount,
                items: e.data.search.edges,
              };
            })
            .reduce((prev, next): any => {
              return {
                count: prev.count + next.count,
                items: prev.items
                  .concat(next.items)
                  .sort((a, b) => a.node.id.localeCompare(b.node.id)),
              };
            })
        );
        setLoading(false);
      });
    })();
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        ...data,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchDataProvider;
