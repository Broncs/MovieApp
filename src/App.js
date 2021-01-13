import React from "react";
import Hero from "./components/Hero/Hero";

import { MovieContextProvider } from "./context/movieContext";
import "./styles/App.scss";

const App = () => {
  return (
    <MovieContextProvider>
      <Hero />
    </MovieContextProvider>
  );
};

export default App;
