import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { imgs } from "./Headphones";
import { imgs1 } from "./Speakers";
import { imgs2 } from "./Earphones";
import "./SingleProduct.css";

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
          <p>FEATURES</p>
          <p>{product.description}</p>
          <p>{product.features}</p>
        </div>
        <div className="box">
          <p>IN THE BOX</p>

          {product.includes.map((e, index) => (
            <p key={index}>
              {e.quantity}x {e.item}
            </p>
          ))}
        </div>
      </div>
      <div className="galery"></div>
    </div>
  );
}

export default SingleProduct;
