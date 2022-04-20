import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import SEO from "../../components/SEO";
import { getData } from "../../utils/services/getData";

import "./style.scss";

export const Home = () => {
  const navigate = useNavigate();
  const { loading, count, items } = getData();

  return (
    <section className="home">
      <SEO title="Home - List" metaContent="GitHome Page Content Data" />
      <Navbar />

      <main className="home__container">
        <div className="home__container__wraper">
          {loading ? (
            <div className="loader" />
          ) : (
            <div className="home__container__wraper__list">
              <span className="home__container__wraper__list__result">
                {count} results
              </span>
              {items?.map(({ node }) => (
                <div
                  className="home__container__wraper__list__element"
                  onClick={() =>
                    node.__typename === "User" &&
                    navigate(`/user/${node.login}`)
                  }
                  key={node.id}
                >
                  {node.__typename}
                </div>
              ))}

              <div className="home__container__wraper__list__pagination">
                <Pagination />
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};
