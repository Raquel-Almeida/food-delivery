import React from "react";

import "./CheckMarkAnimation.scss";

export default function CheckMarkAnimation(props) {
  return (
    <div className="check-mark-container">
      <label className={`${props.checkMarkToggled ? "checked" : ""}`}>
        <div className="check-icon"></div>
      </label>
    </div>
  );
}
