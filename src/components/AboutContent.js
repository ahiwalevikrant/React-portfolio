import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import springboot from "../assets/javaspringboot.png";
import react from "../assets/react.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I...?</h1>
        <p>Software Engineeer at Speridian Tech</p>
        <Link to="/contact">
          <div className="btn">Contact</div>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={springboot} className="img" alt="true"></img>
          </div>
          <div className="img-stack bottom">
            <img src={react} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
