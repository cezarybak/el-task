import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { SearchList } from "../../graphql/operations/queries";
import { SearchListData, SearchListVars } from "../../types/SearchList";

export const Home = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<SearchListData, SearchListVars>(
    SearchList,
    {
      variables: { queryString: "as", first: 5, type: "USER" },
    }
  );

  return (
    <section>
      <Navbar />
      <span>
        {loading && <div>Loading...</div>}
        <span>{data?.search.userCount}</span>
        {data?.search.edges.map(({ node }) => (
          <div onClick={() => navigate(`/user/${node.login}`)} key={node.id}>
            {node.login}
          </div>
        ))}
      </span>
    </section>
  );
};
