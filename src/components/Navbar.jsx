// src/components/Navbar.jsx
import React from "react";
import cart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="" />
        <div className="ul">
          <Link className="link" to={"/"}>
            HOME
          </Link>
          <Link className="link" to={"/headphones"}>
            HEADPHONES
          </Link>
          <Link className="link" to={"/speakers"}>
            SPEAKERS
          </Link>
          <Link className="link" to={"/earphones"}>
            EARPHONES
          </Link>
        </div>
        <img src={cart} alt="" />
      </div>
    </>
  );
}

export default Navbar;
