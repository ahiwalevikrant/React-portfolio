import "./AboutContentStyles.css";
import React from "react";
import springboot from "../assets/javaspringboot.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I...?</h1>
        <p>
          Software Engineer with a Bachelor's from AISSMS College of
          Engineering, specializing in Java backend development. Currently at
          Speridian Technologies, I contribute to impactful healthcare and
          financial projects using Java Spring Boot, Angular, and React. I’m
          focused on advancing in cloud-native tech, microservices, and
          AI-driven solutions
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/vikrant-ahiwale-sdev1.pdf`}
          download
          className="btn"
        >
          Download Resume
        </a>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={springboot} className="img" alt="true"></img>
          </div>
          <div className="img-stack bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
