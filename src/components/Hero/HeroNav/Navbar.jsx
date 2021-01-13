import React, { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";

const Navbar = () => {
  const { search, setSearch, handleSearch, setActiveLink } = useContext(
    MovieContext
  );

  return (
    <nav className="navbar">
      <div className="nav-links">
        <h1>Movie App</h1>
        <ul>
          <li onClick={() => setActiveLink("Popular")}>popular</li>
          <li onClick={() => setActiveLink("Todos filmes")}>todos os filmes</li>
        </ul>
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="pesquisa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
