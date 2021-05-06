import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

import "./Home3.css";
import pizza from "./images/dishes.png";

function Home3() {
  return (
    <>
      <div className="home3-section">
        <div className="home2-responsive-picture-placer">
          <img alt="pizza" src={pizza} className="pizza-image" />
        </div>

        <Parallax
          className="home3-custom-class"
          y={[30, -30]}
          tagOuter="figure"
        >
          <h1 className="home3-title-text1">The age of Reviews!</h1>
          <p className="home3-content-text">
            During these tough times of pandemic, On Point provides a virtual 
            way to use "word of mouth" advertising. Reviews have the ability 
            to enhance merchant credibility, improve comparison shopping 
            rankings, and raise conversion rates.{" "}
          </p>
        </Parallax>
      </div>
    </>
  );
}

export default Home3;
