import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import Loader from "./Loader";

const PopularMovies = () => {
  const { popularMovies, isLoading } = useContext(MovieContext);

  return (
    <div className="movies-lista">
      {!isLoading && popularMovies.length !== 0 ? (
        popularMovies &&
        popularMovies.results.map((populatMovieItem, index) => (
          <div key={index} className="movies-single-item">
            {populatMovieItem.overview.length !== 0 && (
              <p>{populatMovieItem.overview.substring(0, 400)}</p>
            )}

            <img
              src={`https://image.tmdb.org/t/p/w400/${populatMovieItem.poster_path}`}
              alt="poster"
            />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PopularMovies;
