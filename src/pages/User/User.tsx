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
    <section className={`user`}>
      <Navbar />
      <SEO
        title={`User - ${data?.user.name || data?.user.login}`}
        metaContent="GitHome User Content Data"
      />

      <main className="user__container">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <img
              className="user__container__image"
              src={data?.user.avatarUrl}
              alt={`${id}-user-avatart`}
            />
            <div className="user__section">
              <h2 className="user__section__name">{data?.user.name}</h2>
              <h3 className="user__section__login">{data?.user.login}</h3>

              <div className="user__section__info">
                <span className="user__section__info__span">
                  {data?.user.followers.totalCount}
                  <PersonsIcon className="user__icon" /> Followers
                </span>

                <span className="user__section__info__span">
                  {data?.user.following.totalCount} Following
                </span>

                <span className="user__section__info__span">
                  <StarIcon className="user__icon" />
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
