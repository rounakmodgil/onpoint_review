import React, { Component } from "react";
import chef from "./images/chefhat.png";
import plate from "./images/plate.png";
import Card from "./components/Card";
import Backg1 from "./images/leftrect.png";
import Backg2 from "./images/rightrect.png";
import "./Home2.css";
import Delivery from "./images/Delivery.png";

function Home2() {
  return (
    <>
      <div className="home2-section">
        <Card
          image={plate}
          title={"What we need"}
          label1={"Reviews of every web series or movies"}
          label2={"I want genuine movie reviews"}
          label3={"Need peer recommendations"}
          label4={"Need a user friendly app"}
          background={Backg1}
          flag={true}
        />

        <Card
          image={chef}
          title={"What we need"}
          label1={"I need people to know about my business"}
          label2={"I want to enhance my credibility"}
          label3={"Need to gain people’s trust"}
          label4={"Need more visibility"}
          background={Backg2}
        />
      </div>
      <div className="home2-delivery-container">
        <div
          className="home2-delivery-image"
          style={{ backgroundImage: `url(${Delivery})` }}
        />
      </div>
    </>
  );
}

export default Home2;
