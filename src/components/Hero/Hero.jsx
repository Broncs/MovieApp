import React from "react";
import Navbar from "./HeroNav/Navbar";

import Output from "../output/Output";

const Hero = () => {
  return (
    <section className="container">
      <Navbar />
      <Output />
    </section>
  );
};

export default Hero;
