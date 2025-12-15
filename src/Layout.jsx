import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import { useEffect } from "react";
import HeroSection from "./Component/HeroSection/HeroSection.jsx";
import Footer from "./Component/Footer.jsx/Footer.jsx";
import Products from "./Component/Products/Products.jsx";
import NewsLetter from "./Component/NewsLetter/NewsLetter.jsx";

export const Layout = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: "instant",
      },
      [location.pathname]
    );
    console.log(location.pathname);
  });

  return (
    <div>
      <Header />
      <HeroSection />
      <Products />
      <Outlet />
      <NewsLetter />
      <Footer />
    </div>
  );
};
