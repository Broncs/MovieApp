import React, { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    handleSearch,
    setActiveLink,
    hiddenMenu,
    setHiddenMenu,
    activeLink,
    setCurrentPage,
  } = useContext(MovieContext);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <h1>Movie App</h1>
        <ul>
          <li
            style={{
              color: activeLink === "Popular" ? "#00adb5" : "#eeeeee",
              cursor: "pointer",
            }}
            onClick={() => {
              setSearch("");
              setHiddenMenu(true);
              setActiveLink("Popular");
            }}
          >
            Popular
          </li>
          <li
            style={{
              color: activeLink === "Todos filmes" ? "#00adb5" : "#eeeeee",
              cursor: "pointer",
            }}
            onClick={() => {
              setSearch("");
              setActiveLink("Todos filmes");
              setHiddenMenu(false);
            }}
          >
            Todos os filmes
          </li>
        </ul>
      </div>
      <div>
        {!hiddenMenu && (
          <form onSubmit={handleSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="pesquisa"
              value={search}
              onChange={(e) => {
                setCurrentPage(1);
                setSearch(e.target.value);
              }}
            />
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
