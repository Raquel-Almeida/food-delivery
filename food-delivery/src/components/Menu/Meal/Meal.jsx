import React from "react";
import AddToCartButton from "./AddToCartButton/AddToCartButton";

import "./Meal.scss";

export default function Meal(props) {
  let mealsData = props.data;

  // Passes the item id to the parent component (Pagination.jsx)
  const handleMealClick = () => {
    props.onItemClick(mealsData.id);
  };

  return (
    <article className="meal">
      <img className="meal-img" src={process.env.PUBLIC_URL + `/assets/meals/${mealsData.image}`} alt="Meal" />
      <div className="meal-info">
        <h3>{mealsData.name}</h3>
        <p className="meal-description">{mealsData.description}</p>
        <p className="meal-price">
          <b>{mealsData.price}€</b>
        </p>
        <section className="add-to-cart-container">
          <AddToCartButton onAddToCartClick={handleMealClick} />
        </section>
      </div>
    </article>
  );
}
