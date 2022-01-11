import React from "react";

import addToCartIcon from "../../../assets/add-to-cart-icon.png";

import "./Meal.scss";

export default function Meal(props) {
  let { id, imageUrl, title, description, price } = props.meals;

  const handleMealClick = () => {
    props.onMealClick(id);
  };

  return (
    <article className="meal">
      <img src={`assets/${imageUrl}`} alt="Meal" />
      <div className="meal-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="meal-price">
          <b>{price}</b>
        </p>
        <section className="add-to-cart">
          <button onClick={handleMealClick}>
            <img src={addToCartIcon} alt="Add To Cart" />
            <span>Add To Cart</span>
          </button>
        </section>
      </div>
    </article>
  );
}
