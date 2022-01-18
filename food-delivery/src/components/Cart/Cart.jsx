import React from "react";

import "./Cart.scss";

export default function Cart(props) {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "1", name: "pizza", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div className="cart-container">
      <div className="cart">
        {cartItems}
        <div>Total Amount</div>
        <div>25.99€</div>
      </div>
    </div>
  );
}
