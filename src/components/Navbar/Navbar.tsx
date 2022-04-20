import { useNavigate } from "react-router-dom";
import useSearchContext from "../../utils/hooks/useSearchContext";
import logo from "./../../assets/logo.png";

import "./style.scss";

export const Navbar = () => {
  const navigator = useNavigate();
  const { setSearch, search } = useSearchContext();

  return (
    <header className="navbar">
      <div className="navbar__container">
        <img
          className="navbar__container__image"
          src={logo}
          height={38}
          width={38}
          alt="logo"
          onClick={() => navigator("/")}
        />
        <input
          className="navbar__container__input"
          maxLength={25}
          type="text"
          value={search}
          onChange={(e) => setSearch!(e.target.value!)}
          placeholder="Search"
        />
      </div>
    </header>
  );
};
