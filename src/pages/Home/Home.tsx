import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import { SearchList } from "../../graphql/operations/queries";
import { SearchListData, SearchListVars } from "../../types/SearchList";

import "./style.scss";

export const Home = () => {
  // const navigate = useNavigate();
  // const { data, loading } = useQuery<SearchListData, SearchListVars>(
  //   SearchList,
  //   {
  //     variables: { queryString: "as", first: 50, type: "USER" },
  //   }
  // );

  // const count = Intl.NumberFormat().format(data?.search.userCount || 0);

  return (
    <section>
      <SEO title="GitPage - Home" metaContent="GitHome Page Content Data" />
      <Navbar />
      <main className="home__container">
        <div className="home__wraper">
          {/* {loading ? (
            <div className="home_loader" />
          ) : (
            <div>
              <span>{count} results</span>
              {data?.search.edges.map(({ node }) => (
                <div
                  className="home_element"
                  onClick={() => navigate(`/user/${node.login}`)}
                  key={node.id}
                >
                  {node.login}
                </div>
              ))}
            </div>
          )} */}
        </div>
      </main>
      <div className="home_pagination">
        <div className="home__paggination_button_disabled">Previous</div>
        <div>Next</div>
      </div>
    </section>
  );
};
