import React from "react";
import Navbar from "./components/Navbar";
import Smallfooter from "./components/Smallfooter";
import "./Terms.css";
function Boiler() {
  return (
    <>
      <Navbar />
      <div className="boiler-main">
        <div className="boiler-title-background">
          <h1 className="boiler-header"> Terms of Use</h1>
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
