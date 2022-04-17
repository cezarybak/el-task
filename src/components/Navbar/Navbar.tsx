import { Suspense, useEffect, useState } from "react";
import { useSearchMostTop10StarQuery } from "../../graphql/generated";
import useDebounce from "../../hooks/useDebounce";
import logo from "./../../assets/logo.png";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");

  const debounceSearchTerm = useDebounce(search, 500);

  const data = useSearchMostTop10StarQuery({});

  useEffect(() => {
    if (debounceSearchTerm) {
      const data = fetch(
        `https://api.github.com/search/users?q=${debounceSearchTerm}&per_page=10`
      )
        .then((e) => e.json())
        .catch((e) => e.json());
      console.log("asasas", data);

      data.then((e) => setData(e.items));
    } else {
      const data = fetch(`https://api.github.com/search/users&per_page=10`)
        .then((e) => e.json())
        .catch((e) => e.json());
      console.log("asasas", data);

      data.then((e) => setData(e.items));
    }
  }, [debounceSearchTerm]);

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
