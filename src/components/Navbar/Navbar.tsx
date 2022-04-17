import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import logo from "./../../assets/logo.png";

export const Navbar = () => {
  const [search, setSearch] = useState("");

  const debounceSearchTerm = useDebounce(search, 500);

  return (
    <header>
      <img src={logo} alt="logo" />
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="asasdsad"
      />
    </header>
  );
};
