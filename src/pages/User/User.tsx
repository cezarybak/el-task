import Navbar from "../../components/Navbar";
import StarIcon from "./../../assets/svg/star.svg";
import PersonsIcon from "./../../assets/svg/person.svg";

import "./style.scss";

export const User = () => {
  return (
    <section>
      <Navbar />
      <main className="user_container">
        <img src="" alt="" />

        <div className="user__section">
          <div>
            <h1>Michał Maliszewski</h1>
            <h3>michał</h3>
          </div>

          <div className="user__wraper">
            <span className="user__span">
              <PersonsIcon className="user__icon" />
              1221f Followers
            </span>
            <span className="user__span">2112 Following</span>
            <span className="user__span">
              <StarIcon className="user__icon" />
              12 Star
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};
