import React, { useState } from "react";
import CartButton from "../Header/CartButton/CartButton";
import Cart from "./CartPopup/Cart/Cart";

import logoIcon from "../../assets/logo-icon.png";
import hero from "../../assets/hero.png";

import "./Header.scss";

export default function Header(props) {
  let [showCart, setShowCart] = useState(false);

  // Opens cart
  const showCartHandler = () => {
    setShowCart(true);
    document.body.setAttribute("style", "overflow-y: hidden");
  };

  // Closes cart
  const closeCartHandler = () => {
    setShowCart(false);
    document.body.setAttribute("style", "overflow-y: auto");
  };

  return (
    <>
      <header>
        <div className="brand">
          <img className="logo" src={logoIcon} alt="Food Delivery Icon" />
          <h1>Food Delivery</h1>
        </div>
        <CartButton onCartClicked={showCartHandler} />
      </header>
      <div className={`${showCart ? "" : "hidden"}`}>
        <Cart onCloseCart={closeCartHandler} />
      </div>
      <div className="hero">
        <img src={hero} alt="Pancake" />
      </div>
    </>
  );
}
