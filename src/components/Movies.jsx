import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import Loader from "../components/Loader";

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContext);
  console.log(movies);

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
              <div
                key={index}
                className="movies-single-item"
                style={{
                  display: !movieItem.poster_path && "none",
                }}
              >
                {movieItem.overview.length !== 0 ? (
                  <p>{movieItem.overview.substring(0, 400)}</p>
                ) : (
                  <p>Sem Descrição</p>
                )}
                {movieItem.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
                    alt="poster"
                  />
                ) : null}
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
