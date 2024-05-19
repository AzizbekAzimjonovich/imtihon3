import React from "react";
import { Link } from "react-router-dom";
import headPhone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="productCard">
      <div className="card">
        <img className="headImg" src={headPhone} alt="" width={223} />
        <p className="headphones">HEADPHONES</p>
        <Link className="shopLink" to={"/headphones"}>
          <p className="shopLink">shop</p> <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="card">
        <img className="headImg" src={speakers} alt="" width={223} />
        <p className="headphones">SPEAKERS</p>
        <Link className="shopLink" to={"/speakers"}>
          <p className="shopLink">shop</p> <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="card">
        <img className="headImg" src={earphones} alt="" width={223} />
        <p className="headphones">EARPHONES</p>
        <Link className="shopLink" to={"/earphones"}>
          <p className="shopLink">shop</p> <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
