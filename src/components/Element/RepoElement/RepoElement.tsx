import { Link } from "react-router-dom";
import { NodeType } from "../../../types/SearchList";
import parseDate from "../../../utils/helper/parseDate";
import RepoIcon from "./../../../assets/svg/repo.svg";
import StarIcon from "./../../../assets/svg/star.svg";

import "./style.scss";

type Props = {
  items: NodeType;
};

export const RepoElement = ({ items }: Props) => {
  const {
    stargazerCount,
    primaryLanguage,
    updatedAt,
    description,
    licenseInfo,
    name,
    issues,
  } = items;

  const dataFormated = parseDate(updatedAt);

  return (
    <div className="repoElement">
      <RepoIcon className="repoElement__icon" />
      <div className="repoElement__container">
        <div className="repoElement__container__content_wraper">
          <Link
            to={""}
            className="repoElement__container__content_wraper__name"
          >
            {name}
          </Link>
          <h3 className="repoElement__container__content_wraper__description">
            {description}
          </h3>
        </div>

        <div className="repoElement__container__content_other">
          <li className="repoElement__container__content_other__item">
            <StarIcon className="repoElement__container__content_other__item__icon" />
            {stargazerCount}
          </li>
          {!!primaryLanguage?.name && (
            <li className="repoElement__container__content_other__item">
              <div
                className="circle"
                style={{ background: primaryLanguage?.color || "white" }}
              />
              {primaryLanguage?.name}
            </li>
          )}
          {!!licenseInfo?.key && (
            <li className="repoElement__container__content_other__item">
              {licenseInfo?.key.toUpperCase()} license
            </li>
          )}
          <li className="repoElement__container__content_other__item">
            Updated {dataFormated}
          </li>
          {!!issues?.totalCount && (
            <li className="repoElement__container__content_other__item">
              {issues?.totalCount} issues need help
            </li>
          )}
        </div>
      </div>
    </div>
  );
};
