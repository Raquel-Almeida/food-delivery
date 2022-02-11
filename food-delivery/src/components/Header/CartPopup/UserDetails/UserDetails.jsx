import React, { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";

import CartContext from "../../../../store/CartContext";
import CheckMarkAnimation from "./CheckMarkAnimation/CheckMarkAnimation";

import "./UserDetails.scss";

export default function UserDetails(props) {
  const [checkMarkToggled, setCheckMarkToggled] = useState(false);
  const cartContext = useContext(CartContext);
  const form = useRef();

  // Sends and email to the user after completing the order (via EmailJS)
  const sendEmail = () => {
    emailjs.sendForm("service_b2qzqpg", "template_y0pncer", form.current, "user_uA1b3G7qj7OKeGG0QEp4w").then(
      (result) => {
        console.log(result.text);
        checkMarkHandler();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.showFormHandler();
    props.setShowSuccessMessage(true);

    sendEmail();
    clearCart();
  };

  // Clears all items from the cart after submit
  const clearCart = () => {
    cartContext.removeAllItems();
  };

  // Sets the check mark to toggled after the email request is done
  const checkMarkHandler = () => {
    setCheckMarkToggled(true);
  };

  return (
    <>
      <h6 className={`${props.showSuccessMessage ? "hidden" : ""}`}>Your Details</h6>

      {props.showSuccessMessage && (
        <div className="submitting-message">
          <CheckMarkAnimation checkMarkToggled={checkMarkToggled} />
          <span className={`${checkMarkToggled ? "" : "hidden"}`}>
            We received your order!
            <br /> Please check your email for updates.
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
