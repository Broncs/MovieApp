import React, { useContext } from "react";
import Movies from "../Movies";
import Pagination from "../Pagination";
import { MovieContext } from "../../context/movieContext";
import PopularMovies from "../PopularMovies";

const Output = () => {
  const { activeLink } = useContext(MovieContext);

  return (
    <div>
      {activeLink === "Todos filmes" && (
        <>
          <Movies />
          <Pagination />
        </>
      )}
      {activeLink === "Popular" && (
        <>
          <PopularMovies />
        </>
      )}
    </div>
  );
};

export default Output;
