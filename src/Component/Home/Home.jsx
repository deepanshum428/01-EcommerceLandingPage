import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../Products/Products";
import HeroSection from "../HeroSection/HeroSection";

const Home = (props) => {
  return (
    <>
      <HeroSection />
      <Products />
      <NewsLetter />
    </>
  );
};

export default Home;
