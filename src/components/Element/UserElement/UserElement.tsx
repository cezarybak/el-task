import { Link } from "react-router-dom";
import { NodeType } from "../../../types/SearchList";

import "./style.scss";

type Props = {
  items: NodeType;
};

export const UserElement = ({ items }: Props) => {
  const { name, avatarUrl, bio, location, login } = items;

  return (
    <div className="userElement">
      <img
        className="userElement__image"
        src={avatarUrl}
        alt={`${items.id}-user-avatar-list`}
        width={20}
        height={20}
      />

      <div className="userElement__content">
        <div className="userElement__content__name_wraper">
          <Link
            className="userElement__content__name_wraper__navigation"
            to={`/user/${login}`}
          >
            {name}
          </Link>
          <h3 className="userElement__content__name_wraper__login">{login}</h3>
        </div>
        <div className="userElement__content__other_wraper">
          <h3 className="userElement__content__other_wraper__bio">{bio}</h3>
          <span className="userElement__content__other_wraper__location">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};