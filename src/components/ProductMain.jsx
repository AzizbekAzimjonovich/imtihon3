import "./ProductMain.css";
import { Link } from "react-router-dom";
import speaker from "../assets/home/desktop/image-speaker-zx9.png";
import speaker2 from "../assets/home/desktop/image-speaker-zx7.jpg";
import earphones from "../assets/home/desktop/image-earphones-yx1.jpg";
import bgImg from "../assets/home/desktop/pattern-circles.svg";
function ProductMain() {
  return (
    <div className="product-main">
      <div className="div1">
        <img src={speaker} alt="" width={410} />
        <div>
          <p className="proName">ZX9 SPEAKER</p>
          <p className="proInfo">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link className="prolink">SEE PRODUCT</Link>
        </div>
      </div>
      <div className="div2">
        <p>ZX& SPEAKER</p>
        <Link className="prolink2">SEE PRODUCT</Link>
      </div>
      <div className="div3">
        <img src={earphones} alt="" />
        <div>
          <p>YX1 EARPHONES</p>
          <Link className="prolink2">SEE PRODUCT</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductMain;
