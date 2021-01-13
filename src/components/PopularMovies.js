import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const PopularMovies = () => {
  const { popularMovies, isLoading } = useContext(MovieContext);

  return (
    <div className="movies-lista">
      {!isLoading && popularMovies.length !== 0 ? (
        popularMovies &&
        popularMovies.results.map((populatMovieItem, index) => (
          <div key={index} className="movies-single-item">
            <img
              src={`https://image.tmdb.org/t/p/w400/${populatMovieItem.poster_path}`}
              alt="poster"
            />
          </div>
        ))
      ) : (
        <h1>carregando</h1>
      )}
    </div>
  );
};

export default PopularMovies;
