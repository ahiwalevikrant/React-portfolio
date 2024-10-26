import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="ABOUT" text="Software Engineer at Speridian Technologies"/>
      <Footer />
    </div>
  );
};

export default About;
