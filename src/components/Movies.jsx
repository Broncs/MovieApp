import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContext);

  return (
    <section>
      <div>
        <div className="movies-lista">
          {movies.results && movies.results.length === 0 && (
            <h1>resultado nao encontrado</h1>
          )}
          {!isLoading ? (
            movies.results &&
            movies.results.map((movieItem, index) => (
              <div key={index} className="movies-single-item">
                <img
                  src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
                  alt="poster"
                />
              </div>
            ))
          ) : (
            <h1>carregando</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
