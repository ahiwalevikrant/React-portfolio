import "./HeroimgStyles.css";

import React from "react";
import IntroImg from "../assets/download.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro=img" />
      </div>
      <div className="content">
        <p>I'm a Full stack developer</p>
        <h1>Java | SpringBoot | React | Angular</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
