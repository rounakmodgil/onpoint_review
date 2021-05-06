import React from "react";
import MediaQuery from "react-responsive";

import row1img1 from "./images/access.png";
import row1img2 from "./images/dedicatedcourse.png";
import row1img3 from "./images/simulatedvpat.png";
import row2img1 from "./images/hackercommunity.png";
import row2img2 from "./images/beginnerfriendly.png";
import row2img3 from "./images/support.png";
import "./Singleplatform.css";
function Singleplatfor() {
  return (
    <div className="singleplatform-maincont">
      <div className="singleplatform-heading-container">
        <h3 className="singleplatform-heading1"> Kleen Security</h3>
        <h3 className="singleplatform-heading2"> Features</h3>
      </div>
      <MediaQuery minWidth={960}>
        <div className="singleplatform-firstrow">
          <img
            alt="features"
            className="singleplatform-image-container"
            src={row1img1}
          />
          <img
            alt="features"
            className="singleplatform-image-container"
            src={row1img3}
          />
          <img
            alt="features"
            className="singleplatform-image-container"
            src={row1img2}
          />
        </div>
        <div className="singleplatform-firstrow">
          <img
            alt="features"
            className="singleplatform-image-container"
            src={row2img1}
          />
          <img
            alt="features"
            className="singleplatform-image-container"
            src={row2img2}
          />
          <img
            alt="features"
            className="singleplatform-image-container"
            src={row2img3}
          />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={960}>
        <div className="singleplatform-firstrow">
          <img className="singleplatform-image-container" src={row1img1} />
          <img className="singleplatform-image-container" src={row1img2} />
        </div>
        <div className="singleplatform-firstrow">
          <img className="singleplatform-image-container" src={row1img3} />
          <img className="singleplatform-image-container" src={row2img1} />
        </div>
        <div className="singleplatform-firstrow">
          <img className="singleplatform-image-container" src={row2img2} />
          <img className="singleplatform-image-container" src={row2img3} />
        </div>
      </MediaQuery>
    </div>
  );
}

export default Singleplatfor;
