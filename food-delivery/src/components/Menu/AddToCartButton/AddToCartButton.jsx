import React from "react";

import addToCartIcon from "../../../assets/add-to-cart-icon.png";

import "./AddToCartButton.scss";

export default function AddToCartButton(props) {
  // Triggers function call (handleMealClick) on the parent component (Meal.jsx)
  const handleAddToCartClick = () => {
    props.onAddToCartClick();
  };

  return (
    <button className="add-to-cart" onClick={handleAddToCartClick}>
      <img src={addToCartIcon} alt="Add To Cart" />
      <span>Add To Cart</span>
    </button>
  );
}
