import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RepoElement, UserElement } from "../../components/Element";
import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import SEO from "../../components/SEO";
import { getData } from "../../services/getData";

import "./style.scss";

export const Home = () => {
  const [activePage, setActivePage] = useState(0);
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
              <h1 className="home__container__wraper__list__result">
                {count?.toLocaleString()} results
              </h1>
              {items?.map(({ node }) => (
                <div
                  className="home__container__wraper__list__element"
                  onClick={() =>
                    node.__typename === "User" &&
                    navigate(`/user/${node.login}`)
                  }
                  key={node.id}
                >
                  {node.__typename === "Repository" ? (
                    <RepoElement items={node} />
                  ) : (
                    <UserElement items={node} />
                  )}
                </div>
              ))}

              <div className="home__container__wraper__list__pagination">
                <Pagination
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};
