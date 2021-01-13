import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const API_KEY = "9d4fbae6d45a1f406cc115a66a4de03d";

export const MovieContextProvider = ({ children }) => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [showPagination, setShowPagination] = useState(true);
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

      if (search.trim() === "") {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (search.trim() === "") {
      return;
    }

    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();
    setMovies(searchData);

    setShowPagination(false);
  };

  const newPage = (direction) => {
    console.log(direction);
    if (direction === "proximo") {
      setCurrentPage(currentPage + 1);
    } else if (direction === "anterior" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPopularMovies = async () => {
    setIsLoading(true);
    try {
      const popularMoviesResponse = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=3`
      );
      const popularMoviesData = await popularMoviesResponse.json();

      setPopularMovies(popularMoviesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setShowPagination(true);
      getMovies();
    }
  }, [search, currentPage]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(loadingTimeout);
  }, [movies, currentPage]);

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
        setHiddenMenu,
        hiddenMenu,
        setCurrentPage,
        currentPage,
        newPage,
        showPagination,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
