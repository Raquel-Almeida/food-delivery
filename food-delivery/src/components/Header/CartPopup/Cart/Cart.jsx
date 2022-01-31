import React, { useContext } from "react";

import CartContext from "../../../../store/CartContext";

import "./Cart.scss";

export default function Cart(props) {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)}€`;

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
}
