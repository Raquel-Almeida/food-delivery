import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

import "./Meal.scss";

export default function Meal(props) {
  let { id, imageUrl, title, description, price } = props.meals;

  const handleMealClick = () => {
    props.onMealClick(id);
  };

  return (
    <article className="meal">
      <img className="meal-img" src={`assets/${imageUrl}`} alt="Meal" />
      <div className="meal-info">
        <h3>{title}</h3>
        <p className="meal-description">{description}</p>
        <p className="meal-price">
          <b>{price}</b>
        </p>
        <section className="add-to-cart-container">
          <AddToCartButton onAddToCartClick={handleMealClick} />
        </section>
      </div>
    </article>
  );
}
