import React from "react";
import cartIcon from "../../assets/cart-icon.png";
import "./CartButton.css";

export default function CartButton() {
  return (
    <button className="cart-button">
      <img className="cart-icon" src={cartIcon} alt="Cart Icon" />
      <span>Cart</span>
      <span className="total-items">3</span>
    </button>
  );
}
