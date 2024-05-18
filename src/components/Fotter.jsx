import "./Fotter.css";
import logo from "../assets/shared/desktop/logo.svg";
import insta from "../assets/shared/desktop/icon-instagram.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twiter from "../assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <div className="foter">
      <div className="fotter">
        <div className="fotter-menu">
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
        </div>
        <div className="fotter-info">
          <div className="info">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="logos">
            <img src={insta} alt="" />
            <img src={facebook} alt="" />
            <img src={twiter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
