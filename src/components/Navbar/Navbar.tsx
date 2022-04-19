import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataContext from "../../utils/hooks/useDataContext";
import useDebounce from "../../utils/hooks/useDebounce";
import logo from "./../../assets/logo.png";

import "./style.scss";

export const Navbar = () => {
  const navigator = useNavigate();
  const { setSearch, search } = useDataContext();

  return (
    <header>
      <div>
        <img
          className=""
          src={logo}
          alt="logo"
          onClick={() => navigator("/")}
        />
        <input
          className=""
          maxLength={20}
          type="text"
          value={search}
          onChange={(e) => setSearch!(e.target.value!)}
          placeholder="Search"
        />
      </div>
    </header>
  );
};
