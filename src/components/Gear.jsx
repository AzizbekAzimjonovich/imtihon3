import men from "../assets/shared/desktop/image-best-gear.jpg";
import "./gear.css";

function Gear() {
  return (
    <div className="gear">
      <div className="gear-item">
        <p className="text1">
          Bringing you the <span>best</span> audio gear
        </p>
        <p className="info">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={men} alt="" width={540} />
    </div>
  );
}

export default Gear;
