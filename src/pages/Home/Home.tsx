import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import useSearchContext from "../../utils/hooks/useSearchContext";
import { getData } from "../../utils/services/getData";

import "./style.scss";

export const Home = () => {
  const navigate = useNavigate();

  const { loading, count, items } = getData();

  return (
    <section>
      <SEO title="GitPage - Home" metaContent="GitHome Page Content Data" />
      <Navbar />
      <main className="home__container">
        <div className="home__wraper">
          {loading ? (
            <div className="home_loader" />
          ) : (
            <div>
              <span>{count} results</span>
              {items?.map(({ node }) => (
                <div
                  className="home_element"
                  onClick={() =>
                    node.__typename === "User" &&
                    navigate(`/user/${node.login}`)
                  }
                  key={node.id}
                >
                  {node.__typename}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="home_pagination">
          <div className="home__paggination_button_disabled">Previous</div>
          <div>Next</div>
        </div>
      </main>
    </section>
  );
};
