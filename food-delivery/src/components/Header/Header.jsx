import React, { useState } from "react";
import CartButton from "../Header/CartButton/CartButton";
import CartPopup from "./CartPopup/CartPopup";

import logoIcon from "../../assets/logo-icon.png";
import hero from "../../assets/hero.png";

import "./Header.scss";

export default function Header(props) {
  let [showCart, setShowCart] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Opens cart
  const showCartPopupHandler = () => {
    setShowCart(true);
    document.body.setAttribute("style", "overflow-y: hidden");
  };

  // Closes cart
  const closeCartHandler = () => {
    setShowCart(false);
    setShowSuccessMessage(false);
    document.body.setAttribute("style", "overflow-y: auto");
  };

  return (
    <>
      <header>
        <a href="/" className="brand">
          <img className="logo" src={logoIcon} alt="Food Delivery Icon" />
          <h1>Food Delivery</h1>
        </a>
        <CartButton onCartClicked={showCartPopupHandler} />
      </header>
      <div className={`${showCart ? "" : "hidden"}`}>
        <CartPopup
          onCloseCart={closeCartHandler}
          showSuccessMessage={showSuccessMessage}
          setShowSuccessMessage={setShowSuccessMessage}
        />
      </div>
      <div className="hero">
        <img src={hero} alt="Pancake" />
      </div>
    </>
  );
}
