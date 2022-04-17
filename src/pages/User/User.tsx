import Navbar from "../../components/Navbar";
import StarIcon from "./../../assets/star.svg";
import PersonsIcon from "./../../assets/person.svg";

import "./style.scss";

export const User = () => {
  return (
    <section>
      <Navbar />
      <main className="main">
        <img src="" alt="" />

        <div className="contatiner">
          <div>
            <h1>Michał Maliszewski</h1>
            <h3>michał</h3>
          </div>

          <div className="wraper">
            <span>
              <PersonsIcon className="icon" />
              1221f Followers
            </span>
            <span>2112 Following</span>
            <span>
              <StarIcon className="icon" />
              12 Star
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};
