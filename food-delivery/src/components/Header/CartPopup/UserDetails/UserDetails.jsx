import React, { useState, useContext } from "react";

import CartContext from "../../../../store/CartContext";

import "./UserDetails.scss";

export default function UserDetails(props) {
  const cartContext = useContext(CartContext);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      props.setShowSucessMessage(true);
      clearCart();
    }, 1000);

    props.showFormHandler();
  };

  const clearCart = () => {
    cartContext.removeAllItems();
  };

  return (
    <>
      <h6 className={`${props.showSucessMessage ? "hidden" : ""}`}>Your Details</h6>
      {submitting && <div>Submitting Your Order...</div>}
      {props.showSucessMessage && <div>We received your order! Thanks!</div>}
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
