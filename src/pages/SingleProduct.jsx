import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { imgs } from "./Headphones";
import { imgs1 } from "./Speakers";
import { imgs2 } from "./Earphones";
import "./SingleProduct.css";
import Also from "../components/Also";

import xx591 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import xx592 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import xx593 from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

import xx991 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import xx992 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import xx993 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import xx9921 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import xx9922 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import xx9923 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import yx11 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import yx12 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import yx13 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

import zx71 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import zx72 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import zx73 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

import zx91 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import zx92 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import zx93 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

const gallery = {
  "xx59-headphones": [xx591, xx592, xx593],
  "xx99-mark-one-headphones": [xx991, xx992, xx993],
  "xx99-mark-two-headphones": [xx9921, xx9922, xx9923],
  "yx1-earphones": [yx11, yx12, yx13],
  "zx7-speaker": [zx71, zx72, zx73],
  "zx9-speaker": [zx91, zx92, zx93],
};

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }
  const productGallery = gallery[product.slug];

  return (
    <div className="single-product" style={{ backgroundColor: "#fff" }}>
      <div className="buy">
        <Link className="backHome" to={"/"}>
          Go Back
        </Link>
        <div className="card-headphone" key={product.id}>
          <img
            src={
              product.category === "headphones"
                ? imgs[product.slug]
                : product.category === "speakers"
                ? imgs1[product.slug]
                : imgs2[product.slug]
            }
            alt=""
            width={540}
          />
          <div className="product-item">
            <p className="text-new">
              {product.new === true ? "NEW PRODUCT" : ""}
            </p>
            <h2 className="text-name">{product.name}</h2>
            <p className="text-info">{product.description}</p>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="see-product">
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
      <div className="fullInfo">
        <div className="feature">
          <p className="text-feature">FEATURES</p>
          <p className="description">{product.description}</p>
          <p className="description">{product.features}</p>
        </div>
        <div className="box">
          <p className="text-feature">IN THE BOX</p>

          {product.includes.map((e, index) => (
            <p className="description" key={index}>
              <span>{e.quantity}x</span> <p>{e.item}</p>
            </p>
          ))}
        </div>
      </div>
      <div className="galery">
        <div className="galeryMin">
          <img src={productGallery[0]} alt="" width={445} />
          <img src={productGallery[1]} alt="" width={445} />
        </div>
        <img src={productGallery[2]} alt="" width={635} />
      </div>
      <Also />
    </div>
  );
}

export default SingleProduct;
