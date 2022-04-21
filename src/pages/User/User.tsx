import Navbar from "../../components/Navbar";
import StarIcon from "./../../assets/svg/star.svg";
import PersonsIcon from "./../../assets/svg/person.svg";
import { useParams } from "react-router-dom";
import SEO from "../../components/SEO";
import { useQuery } from "@apollo/client";
import { SearchUser } from "../../graphql/operations/queries";
import { SearchUserData, SearchUserVars } from "../../types/SearchUser";

import "./style.scss";

export const User = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<SearchUserData, SearchUserVars>(
    SearchUser,
    {
      variables: { login: id! },
    }
  );

  return (
    <section className="userPage">
      <Navbar />
      <SEO
        title={`User - ${data?.user.name || data?.user.login}`}
        metaContent="GitHome User Content Data"
      />

      <main className="userPage__container">
        {loading ? (
          <div className="loader" />
        ) : (
          <>
            <img
              className="userPage__container__image"
              src={data?.user.avatarUrl}
              alt={`${id}-user-avatart`}
            />
            <div className="userPage__section">
              <h2 className="userPage__section__name">{data?.user.name}</h2>
              <h3 className="userPage__section__login">{data?.user.login}</h3>

              <div className="userPage__section__info">
                <span className="userPage__section__info__span">
                  {data?.user.followers.totalCount}
                  <PersonsIcon className="userPage__icon" /> Followers
                </span>

                <span className="userPage__section__info__span">
                  {data?.user.following.totalCount} Following
                </span>

                <span className="userPage__section__info__span">
                  <StarIcon className="userPage__icon" />
                  {data?.user.starredRepositories.totalCount} Star
                </span>
              </div>
            </div>
          </>
        )}
      </main>
    </section>
  );
};
