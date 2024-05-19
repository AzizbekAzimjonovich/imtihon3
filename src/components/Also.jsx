import "./Also.css";
import { Link } from "react-router-dom";
import XX99 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import XX59 from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import XX991 from "../assets/product-zx9-speaker/desktop/image-product.jpg";

function Also() {
  return (
    <div className="also">
      <p className="descripton">YOU MAY ALSO LIKE</p>
      <div className="alsoCon">
        <div className="card-also">
          <img src={XX99} alt="" width={350} />
          <p>XX99 MARK II</p>
          <Link to={`/product/3`} className="see-product">
            SEE PRODUCT
          </Link>
        </div>
        <div className="card-also">
          <img src={XX59} alt="" width={350} />
          <p>XX59</p>
          <Link to={`/product/3`} className="see-product">
            SEE PRODUCT
          </Link>
        </div>
        <div className="card-also">
          <img src={XX991} alt="" width={350} />
          <p>ZX9 SPEAKER</p>
          <Link to={`/product/3`} className="see-product">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Also;
