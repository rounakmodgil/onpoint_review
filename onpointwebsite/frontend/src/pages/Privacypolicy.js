import React from "react";
import Navbar from "./components/Navbar";
import Smallfooter from "./components/Smallfooter";
import "./Privacypolicy.css";
function Boiler() {
  return (
    <>
      <Navbar />
      <div className="boiler-main">
        <div className="boiler-title-background">
          <h1 className="boiler-header"> Privacy Policy</h1>
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
