import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import useDataContext from "../../utils/hooks/useDataContext";

import "./style.scss";

export const Home = () => {
  const { items, count, loading } = useDataContext();
  const navigate = useNavigate();

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
