import { Suspense, useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");

  const debounceSearchTerm = useDebounce(search, 500);

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
    <div>
      <Suspense fallback={<p>Loading user bookings...</p>}>
        {data?.map((e) => (
          <div key={e?.id || ""}>{e.starred_url.length}</div>
        ))}
      </Suspense>
      {error}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="asasdsad"
      />
    </div>
  );
};
