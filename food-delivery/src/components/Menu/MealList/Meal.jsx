import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

import "./Meal.scss";

export default function Meal(props) {
  let mealsData = props.meals;

  const handleMealClick = () => {
    props.onMealClick(mealsData.id);
  };

  return (
    <article className="meal">
      <img className="meal-img" src={`assets/${mealsData.imageUrl}`} alt="Meal" />
      <div className="meal-info">
        <h3>{mealsData.title}</h3>
        <p className="meal-description">{mealsData.description}</p>
        <p className="meal-price">
          <b>{mealsData.price}</b>
        </p>
        <section className="add-to-cart-container">
          <AddToCartButton onAddToCartClick={handleMealClick} />
        </section>
      </div>
    </article>
  );
}
