import React from "react";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-200 h-64 pt-20 pb-96">
        <div className="container flex flex-col justify-center items-center gap-7 text-center">
          <h1 className="title-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl md:pb-5"> Welcome To HeroGadget</h1>
          <p className="font-normal md:text-lg sm:text-base text-sm lg:w-1/2">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div className="text-center flex  flex-col md:flex-row items-center gap-4 md:gap-7">
            <Link className="btn-primary">
              Shop Now
            </Link>
            <Link className="btn-outline">learn more</Link>
          </div>
        </div>
      </div>
      <img src={heroImg} alt="hero" className="container -mt-24 rounded-md" />
    </div>
  );
};

export default Home;
