// src/pages/Home.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import Gear from "../components/Gear";
import Fotter from "../components/Fotter";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <ProductCard />
      <Gear />
      <Fotter />
    </>
  );
}

export default Home;
