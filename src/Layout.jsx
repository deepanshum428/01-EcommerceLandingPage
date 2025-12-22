import { Outlet, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import { useEffect } from "react";
import Footer from "./Component/Footer.jsx/Footer.jsx";

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
      <Outlet />
      <Footer />
    </div>
  );
};
