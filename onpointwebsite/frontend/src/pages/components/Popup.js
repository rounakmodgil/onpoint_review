import React from "react";
import "./Popup.css";
import { FaTimes } from "react-icons/fa";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn" onClick={() => props.setTrigger(-1)}>
          <FaTimes />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
