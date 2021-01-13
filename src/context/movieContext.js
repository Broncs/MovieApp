import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const API_KEY = "9d4fbae6d45a1f406cc115a66a4de03d";

export const MovieContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("Popular");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${currentPage}`
      );

      const data = await response.json();

      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();
    setMovies(searchData);
  };

  const getPopularMovies = async () => {
    setIsLoading(true);
    try {
      const popularMoviesResponse = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=3`
      );
      const popularMoviesData = await popularMoviesResponse.json();

      setPopularMovies(popularMoviesData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        popularMovies,
        isLoading,
        activeLink,
        setSearch,
        handleSearch,
        setActiveLink,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
