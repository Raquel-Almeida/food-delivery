import React, { useState } from "react";

import Cart from "./Cart/Cart";
import UserDetails from "./UserDetails/UserDetails";

import "./CartPopup.scss";

export default function CartPopup(props) {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showForm, setShowForm] = useState(true);

  let showUserDetailsHandler = () => {
    setShowUserDetails(true);
  };

  let onCloseCartHandler = () => {
    setShowUserDetails(false);
    setShowForm(true);
    props.onCloseCart();
  };

  const showFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="cart-popup-container" onClick={onCloseCartHandler}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onCloseCartHandler}>
          x
        </button>
        <div className={`user-details-container ${showUserDetails ? "hidden" : ""}`}>
          <Cart onContinueClick={showUserDetailsHandler} />
        </div>
        <div className={`user-details-container ${showUserDetails ? "" : "hidden"}`}>
          <UserDetails
            showForm={showForm}
            showFormHandler={showFormHandler}
            setShowSucessMessage={props.setShowSucessMessage}
            showSucessMessage={props.showSucessMessage}
          />
        </div>
      </div>
    </div>
  );
}
