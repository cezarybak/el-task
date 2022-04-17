import { useQuery } from "@apollo/client";
import { SearchList } from "../../graphql/operations/queries";
import { SearchListData, SearchListVars } from "../../types/SearchList";

export const Home = () => {
  const { data, loading } = useQuery<SearchListData, SearchListVars>(
    SearchList,
    {
      variables: { queryString: "as", first: 5, type: "USER" },
    }
  );

  return (
    <div>
      Halkosz
      <span>
        {loading && <div>Loading...</div>}
        <span>{data?.search.userCount}</span>
        {data?.search.edges.map(({ node }) => (
          <div key={node.id}>{node.login}</div>
        ))}
      </span>
    </div>
  );
};
