import React from "react";
import Routes from "./pages/Routes";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <>
      <ParallaxProvider>
        <Routes />
      </ParallaxProvider>
    </>
  );
}

export default App;
