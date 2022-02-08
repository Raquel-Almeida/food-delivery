import React, { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";

import CartContext from "../../../../store/CartContext";
import CheckMarkAnimation from "./CheckMarkAnimation/CheckMarkAnimation";

import "./UserDetails.scss";

export default function UserDetails(props) {
  const cartContext = useContext(CartContext);
  const [checkMarkToggled, setCheckMarkToggled] = useState(false);

  const form = useRef();

  // SENDS AN EMAIL TO THE USER AFTER COMPLETING THE ORDER (VIA EMAILJS)
  const sendEmail = () => {
    console.log(form);
    emailjs.sendForm("service_b2qzqpg", "template_y0pncer", form.current, "user_uA1b3G7qj7OKeGG0QEp4w").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      props.setShowSucessMessage(true);
      clearCart();
      checkMarkHandler();
    }, 0);

    props.showFormHandler();
    sendEmail();
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
          <form ref={form} onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" placeholder="Enter your full name" name="user_name" required />
            </label>
            <label>
              Address:
              <input type="text" placeholder="Enter your address" name="user_address" required />
            </label>
            <label>
              Phone:
              <input type="phone" placeholder="Enter your phone number" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" name="user_email" required />
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
