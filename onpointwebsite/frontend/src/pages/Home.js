import React, { Component } from "react";

import "./Home.css";
import mainlogo from "./images/logo.png";
import ramen from "./images/ramen.png";
import {
  FaUtensils,
  FaCertificate,
  FaMoneyBill,
  FaGift,
  FaAndroid,
  FaAppStore,
  FaApplePay,
  FaWizardsOfTheCoast,
  FaIntercom,
  FaOdnoklassnikiSquare,
  FaFreeCodeCamp,
  FaTv,
  FaUntappd,
} from "react-icons/fa";

import ellipse from "./images/ellipse.png";
import { Parallax } from "react-scroll-parallax";
function Home() {
  return (
    <>
      <div className="home-section" id="home">
        <div className="home-main-logo">
          <img alt="mainbg" src={mainlogo} className="logo-home" />
        </div>
        <div className="home-main-sub-divison-wrapper">
          <Parallax
            className="home-custom-class"
            y={[30, -30]}
            tagOuter="figure"
          >
            <div>
              <h1 className="home-title-text">Check before you do!</h1>
              <p className="home-content-text">
              Want to go to a new place or want to try someting new? Not sure 
              about how it will be? Check what people think about it
              before you experience it. Check On Point!{" "}
              </p>
              <div className="home-list-content">
                <div>
                  <div className="home-list-item">
                    <FaUtensils color={"#552e30"} size={20} />
                    <p style={{ marginLeft: "10px" }}>Check restaurant reviews</p>
                  </div>
                  <div className="home-list-item">
                    <FaFreeCodeCamp color={"#552e30"} size={20} />
                    <p style={{ marginLeft: "10px" }}>Check application reviews</p>
                  </div>
                </div>
                <div>
                  <div className="home-list-item">
                    <FaTv color={"#552e30"} size={20} />
                    <p style={{ marginLeft: "10px" }}>Check tv shows and movie reviews</p>
                  </div>
                  <div className="home-list-item">
                    <FaUntappd color={"#552e30"} size={20} />
                    <p style={{ marginLeft: "10px" }}>Basically, we review everything!</p>
                  </div>
                </div>
              </div>
              <div className="home-buttons">
                <button className="home-butt">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FaAndroid color={"#fff"} size={20} />
                    <p className="home-button-style">Soon on Play Store</p>
                  </div>
                </button>
                <button className="home-butt">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FaAppStore color={"#fff"} size={20} />
                    <p className="home-button-style">Soon on App Store</p>
                  </div>
                </button>
              </div>
            </div>
          </Parallax>

          <div className="home-responsive-ramen-placer">
            <div>
              <img alt="ramen" src={ramen} className="ramen-image" />
              <div
                className="home-shadow-image"
                style={{ backgroundImage: `url(${ellipse})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
