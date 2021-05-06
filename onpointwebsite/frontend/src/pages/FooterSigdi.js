import React, { Component } from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./FooterSigdi.css";

class FooterSigdi extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer-section">
          <div className="footerheading">Catch Us Candid Here</div>
          <div className="footerelements">
            <div>
              <a
                className="footerelement-text1"
                target="_blank"
                href=""
              >
                LinkedIn
              </a>
            </div>

            <div>
              <a
                className="footerelement-text2"
                target="_blank"
                href=""
              >
                Instagram{" "}
              </a>
            </div>

            <div>
              <a
                className="footerelement-text3"
                target="_blank"
                href=""
              >
                Facebook
              </a>
            </div>
            <a
              className="footerelement-text4"
              target="_blank"
              href=""
            >
              Twitter
            </a>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              height: "10vh",
              display: "flex",
              justifyContent: "center",
              marginTop: "160px",
              borderTop: "1px solid #ddd",
              paddingTop: "20px",
            }}
          >
            <Link className="bottom-footer-elements" to="/privacypolicy">
              <div>Privacy Policy</div>
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
        </div>
      </>
    );
  }
}
export default FooterSigdi;
