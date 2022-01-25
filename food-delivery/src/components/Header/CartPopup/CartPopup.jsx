import React, { useState } from "react";

import Cart from "./Cart/Cart";
import UserDetails from "./UserDetails/UserDetails";

import "./CartPopup.scss";

export default function CartPopup(props) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  let showUserDetailsHandler = () => {
    setShowUserDetails(true);
  };

  return (
    <div className="cart-popup-container">
      <div className="cart-popup">
        <button className="close-button" onClick={props.onCloseCart}>
          x
        </button>

        <Cart onContinueClick={showUserDetailsHandler} />
        <div className={`user-details-container ${showUserDetails ? "" : "hidden"}`}>
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
