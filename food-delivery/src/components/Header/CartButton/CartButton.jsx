import React, { useContext } from "react";

import CartContext from "../../../store/CartContext";

import cartIcon from "../../../assets/cart-icon.png";

import "./CartButton.scss";

export default function CartButton(props) {
  // Stores the access to the CartContext component
  // This permits this component (CartButton.jsx) to be re-evaluated each time the context changes
  const cartContext = useContext(CartContext);

  // Outputs the number of total cart items
  const cartItemsNumber = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className="cart-button" onClick={props.onCartClicked}>
      <img className="cart-icon" src={cartIcon} alt="Cart" />
      <span className="cart-title">Cart</span>
      <span className="total-items">{cartItemsNumber}</span>
    </button>
  );
}
