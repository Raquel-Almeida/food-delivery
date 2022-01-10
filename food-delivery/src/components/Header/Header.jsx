import React from "react";
import CartButton from "./CartButton";

import logoIcon from "../../assets/logo-icon.png";
import hero from "../../assets/hero.png";

import "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <div className="brand">
          <img className="logo" src={logoIcon} alt="Food Delivery Icon" />
          <h1>Food Delivery</h1>
        </div>
        <CartButton />
      </header>
      <div className="hero">
        <img src={hero} alt="Pancake" />
      </div>
    </>
  );
}
