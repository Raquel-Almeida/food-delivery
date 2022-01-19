import React from "react";

import "./Cart.scss";

export default function Cart(props) {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "1", name: "pizza", amount: 2, price: 12.99 }].map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );

  // **TODO**
  const confirmOrderHandler = () => {
    console.log("Confirm Order");
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <button className="close-cart-button" onClick={props.onCloseCart}>
          x
        </button>
        <h6>Your Cart</h6>
        {cartItems}
        <div className="total-amount-container">
          <span>Total Amount</span>
          <span>25.99€</span>
        </div>
        <button className="confirm-cart-button" onClick={confirmOrderHandler}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
