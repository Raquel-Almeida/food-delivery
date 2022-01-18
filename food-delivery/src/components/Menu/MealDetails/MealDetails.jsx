import React, { useState } from "react";

import "./MealDetails.scss";

export default function MealDetails(props) {
  // **TODO**
  const confirmMealHandler = (id) => {
    console.log("Confirm " + id);
  };

  return (
    <div className="meal-details-container">
      <div className="meal-details">
        <button className="close-details-button" onClick={props.onCloseDetailsHandler}>
          x
        </button>
        <h4>Sushi</h4>
        <p className="meal-details-description">
          Japanese dish featuring specially prepared rice and usually some type of fish or seafood, often raw, but sometimes cooked.
        </p>
        <p className="toppings-title">Choose your toppings:</p>
        <form>
          <input type="checkbox" name="ham" id="ham" />
          <label htmlFor="ham">Ham</label>
        </form>
        <button className="confirm-details-button" onClick={confirmMealHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
}
