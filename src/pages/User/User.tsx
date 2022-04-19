import Navbar from "../../components/Navbar";
import StarIcon from "./../../assets/svg/star.svg";
import PersonsIcon from "./../../assets/svg/person.svg";

import "./style.scss";
import { useParams } from "react-router-dom";
import SEO from "../../components/SEO";
import useDataContext from "../../utils/hooks/useDataContext";

export const User = () => {
  const { slug } = useParams();
  const { items } = useDataContext();

  const user = items?.find((e) => e.node.login === slug);

  console.log("saas", user);

  const {
    name,
    avatarUrl,
    login,
    followers,
    following,
    description,
    updatedAt,
    stargazerCount,
    primaryLanguage,
  } = user?.node!;

  return (
    <section>
      <Navbar />
      <SEO title={`${name} - User`} metaContent="GitHome User Content Data" />

      <main className="user_container">
        <img src={avatarUrl} alt={`${name}-user-avatart`} />

        <div className="user__section">
          <div>
            <h1>Michał Maliszewski</h1>
            <h3>michał</h3>
          </div>

          <div className="user__wraper">
            <span className="user__span">
              <PersonsIcon className="user__icon" />
              {`${followers?.totalCount} Followers`}
            </span>
            <span className="user__span">
              {following?.totalCount} Following
            </span>
            <span className="user__span">
              <StarIcon className="user__icon" />
              {stargazerCount} Star
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};
