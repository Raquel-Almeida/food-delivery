import React, { useContext } from "react";

import CartContext from "../../../../store/CartContext";

import "./Cart.scss";

export default function Cart(props) {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)}€`; // Rounds to two decimals

  // Removes the selected item from the cart through the useContext
  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item, i) => (
        <li className="item" key={i}>
          <div className="info">
            <p>{item.name}</p>
            <p>{item.price}€</p>
            <p>x{item.amount}</p>
          </div>
          <button className="remove-button" onClick={removeItemHandler.bind(null, item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );

  // Allows the cart to show a message to the user if it's empty
  if (cartContext.items && cartContext.items.length > 0) {
    return (
      <>
        <h6>Your Cart</h6>
        {cartItems}
        <div className="total-amount">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <button className="continue-button" onClick={props.onContinueClick}>
          Continue
        </button>
      </>
    );
  } else {
    return (
      <>
        <h6>Your Cart</h6>
        <p>Oops! Your cart is empty.</p>
        <div className="total-amount">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <button className="continue-button disabled" onClick={props.onContinueClick}>
          Continue
        </button>
      </>
    );
  }
}
