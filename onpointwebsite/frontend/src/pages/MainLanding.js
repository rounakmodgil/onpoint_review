import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Home2 from "./Home2";
import Home3 from "./Home3";
import FooterSigdi from "./FooterSigdi";
import Nonce from "./nonce";

function MainLanding() {
  return (
    <>
      <Navbar />
      <Home />
      <Home2 />
      <Home3 />
      <FooterSigdi />
      <Nonce />
    </>
  );
}

export default MainLanding;
