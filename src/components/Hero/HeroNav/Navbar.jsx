import React, { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";

const Navbar = () => {
  const value = useContext(MovieContext);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <h1>Movie App</h1>
        <ul>
          <li>popular</li>
          <li>todos os filmes</li>
        </ul>
      </div>
      <div>
        <input className="search-input" type="text" placeholder="pesquisa" />
      </div>
    </nav>
  );
};

export default Navbar;
