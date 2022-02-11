import React, { useState } from "react";

import Cart from "./Cart/Cart";
import UserDetails from "./UserDetails/UserDetails";

import "./CartPopup.scss";

export default function CartPopup(props) {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // Shows a page containing a form to the user after clicking continue
  let showUserDetailsHandler = () => {
    setShowUserDetails(true);
  };

  // Handles the action of closing the cart popup and resets it (e.g. if the user closes the cart while on the form page, when he re-opens it the cart page will be shown)
  let onCloseCartHandler = () => {
    setShowUserDetails(false);
    setShowForm(true);
    props.onCloseCart();
  };

  // Lets the form be hidden after being submitted
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
            setShowSuccessMessage={props.setShowSuccessMessage}
            showSuccessMessage={props.showSuccessMessage}
          />
        </div>
      </div>
    </div>
  );
}
