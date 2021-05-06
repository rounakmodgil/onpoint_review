import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SmallFooter.css";

function Smallfooter() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        borderTop: "1px solid #ddd",
        paddingTop: "20px",
      }}
    >
      <Link className="bottom-footer-elements" to="/privacypolicy">
        <div>Privacy Policy</div>
      </Link>
      <Link className="bottom-footer-elements" to="/faq">
        <div>FAQ</div>
      </Link>
      <Link className="bottom-footer-elements" to="/contact">
        <div>Joinus</div>
      </Link>
      <Link className="bottom-footer-elements" to="/termsandcondition">
        <div>Terms of Use</div>
      </Link>
      <div className="bottom-footer-elements" style={{ display: "flex" }}>
        <div style={{ marginTop: "2px", marginRight: "5px" }}>
          <FaCopyright />
        </div>
        On Point
      </div>
    </div>
  );
}

export default Smallfooter;
