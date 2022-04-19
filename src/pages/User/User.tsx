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
    <section>
      <Navbar />
      <SEO
        title={`User - ${data?.user.name || data?.user.login}`}
        metaContent="GitHome User Content Data"
      />

      <main className="user_container">
        <img src={data?.user.avatarUrl} alt={`${id}-user-avatart`} />
        <div className="user__section">
          <div>
            <h1>{data?.user.name}</h1>
            <h3>{data?.user.login}</h3>
          </div>

          <div className="user__wraper">
            <span className="user__span">
              {data?.user.followers.totalCount}
              <PersonsIcon className="user__icon" />
            </span>
            <span className="user__span">
              {data?.user.following.totalCount}
              Following
            </span>
            <span className="user__span">
              <StarIcon className="user__icon" />
              {data?.user.starredRepositories.totalCount} Star
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};
