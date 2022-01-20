import React, { useContext } from "react";

import CartContext from "../../../store/CartContext";

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
        <li className="meal-cart-item" key={i}>
          <div className="meal-cart-info">
            <p>{item.name}</p>
            <p>{item.price}€</p>
            <p>x{item.amount}</p>
          </div>
          <button className="remove-item-button" onClick={removeItemHandler.bind(null, item.id)}>
            Remove
          </button>
        </li>
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
          <span>{totalAmount}</span>
        </div>
        <button className="confirm-cart-button" onClick={confirmOrderHandler}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
