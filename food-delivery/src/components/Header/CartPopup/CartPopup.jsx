import React, { useState } from "react";

import Cart from "./Cart/Cart";
import UserDetails from "./UserDetails/UserDetails";

import "./CartPopup.scss";

export default function CartPopup(props) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  let showUserDetailsHandler = () => {
    setShowUserDetails(true);
  };

  let onCloseCartHandler = () => {
    setShowUserDetails(false);
    props.onCloseCart();
  };

  return (
    <div className="cart-popup-container">
      <button className="close-button" onClick={onCloseCartHandler}>
        x
      </button>
      <div className={`cart-popup ${showUserDetails ? "flip" : ""}`}>
        <div className="cart-section-container">
          <Cart onContinueClick={showUserDetailsHandler} />
        </div>
        <div className="cart-section-container">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
