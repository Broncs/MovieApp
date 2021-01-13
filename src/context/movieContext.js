import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const API_KEY = "9d4fbae6d45a1f406cc115a66a4de03d";
const url = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;

export const MovieContextProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={{ hi: "hi" }}>
      {children}
    </MovieContext.Provider>
  );
};
