import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataContext from "../../utils/hooks/useDataContext";
import logo from "./../../assets/logo.png";

import "./style.scss";

export const Navbar = () => {
  const navigator = useNavigate();
  const { setSearch } = useDataContext();

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
          onChange={(e) => setSearch!(e.target.value!)}
          placeholder="Search"
        />
      </div>
    </header>
  );
};
