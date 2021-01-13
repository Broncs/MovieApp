import React from "react";
import Navbar from "./HeroNav/Navbar";
import Pagination from "../Pagination";
import Movies from "../Movies";

const Hero = () => {
  return (
    <section className="container">
      <Navbar />
      <Movies />
      <Pagination />
    </section>
  );
};

export default Hero;
