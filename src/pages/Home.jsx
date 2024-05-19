import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import Gear from "../components/Gear";
import Fotter from "../components/Fotter";
import ProductMain from "../components/ProductMain";

function Home() {
  const location = useLocation();

  return (
    <>
      <div className="home">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <ProductCard />
      {location.pathname === "/" && <ProductMain />}

      <Gear />
      <Fotter />
    </>
  );
}

export default Home;
