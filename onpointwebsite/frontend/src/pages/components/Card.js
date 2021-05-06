import React from "react";
import "./Card.css";
import {
  FaBookmark,
  FaBookOpen,
  FaCheck,
  FaClock,
  FaEye,
  FaFeatherAlt,
  FaHeart,
  FaHome,
  FaMagic,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaNimblr,
  FaQuoteRight,
  FaRev,
  FaTag,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import Logo from "../images/logo.png";
import MediaQuery from "react-responsive";
function Card({
  image,
  background,
  title,
  label1,
  label2,
  label3,
  label4,
  flag = false,
}) {
  return (
    <div
      className="card-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <MediaQuery minDeviceWidth={701}>
        <div className="card-image-container">
         
          {flag && <div className="card-image-label">User</div>}
          {!flag && <div className="card-image-label">Business</div>}
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={700}>
        {" "}
        <div className="card-image-container2">
          {flag && <div className="card-image-label">Customers</div>}
          {!flag && <div className="card-image-label">Customers</div>}
        </div>
      </MediaQuery>
      <div className="card-text-main-container">
        <div className="card-title-text" style={{ marginBottom: "15px" }}>
          {title} ?
        </div>

        <div className="card-list-content">
          <div className="card-list">
            <div className="card-list-wrapper">
              {flag && <FaRev size={16} />}
              {!flag && <FaTag size={16} />}
            </div>
            <div className="card-list-label">{label1}</div>
          </div>
          <div className="card-list">
            <div className="card-list-wrapper">
              {flag && <FaBookOpen size={16} />}
              {!flag && <FaNimblr size={16} />}
            </div>
            <div className="card-list-label">{label2}</div>
          </div>
          <div className="card-list">
            <div className="card-list-wrapper">
              {flag && <FaCheck size={16} />}
              {!flag && <FaBookmark size={15} />}
            </div>
            <div className="card-list-label">{label3}</div>
          </div>
          <div className="card-list">
            <div className="card-list-wrapper">
              {flag && <FaFeatherAlt size={16} />}
              {!flag && <FaEye size={16} />}
            </div>
            <div className="card-list-label">{label4}</div>
          </div>
          <MediaQuery minDeviceWidth={701}>
            {flag && <img className="card-logo" src={Logo} />}
          </MediaQuery>
          <MediaQuery maxDeviceWidth={700}>
            <img className="card-logo1" src={Logo} />
          </MediaQuery>
        </div>
      </div>
    </div>
  );
}

export default Card;
