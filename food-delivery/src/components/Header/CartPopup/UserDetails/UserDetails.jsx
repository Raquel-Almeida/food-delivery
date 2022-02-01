import React, { useState, useContext } from "react";

import CartContext from "../../../../store/CartContext";
import CheckMarkAnimation from "./CheckMarkAnimation/CheckMarkAnimation";

import "./UserDetails.scss";

export default function UserDetails(props) {
  const cartContext = useContext(CartContext);
  const [checkMarkToggled, setCheckMarkToggled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      props.setShowSucessMessage(true);
      clearCart();
      checkMarkHandler();
    }, 0);

    props.showFormHandler();
  };

  const clearCart = () => {
    cartContext.removeAllItems();
  };

  const checkMarkHandler = () => {
    setTimeout(() => {
      setCheckMarkToggled(true);
    }, 1500);
  };

  return (
    <>
      <h6 className={`${props.showSucessMessage ? "hidden" : ""}`}>Your Details</h6>

      {props.showSucessMessage && (
        <div className="submitting-message">
          <CheckMarkAnimation checkMarkToggled={checkMarkToggled} />
          <span className={`${checkMarkToggled ? "" : "hidden"}`}>
            We received your order!
            <br /> Thank you for your preference.
          </span>
        </div>
      )}
      <div className={`user-details-container ${props.showForm ? "" : "hidden"}`}>
        <div className="user-form">
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" placeholder="Enter your full name" required />
            </label>
            <label>
              Address:
              <input type="text" placeholder="Enter your address" required />
            </label>
            <label>
              Phone:
              <input type="phone" placeholder="Enter your phone number" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Any special requests?
              <input type="text" placeholder="Leave us a note..." maxLength="100" />
            </label>
            <button type="submit">Confirm Order</button>
          </form>
        </div>
      </div>
    </>
  );
}
