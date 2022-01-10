import React from "react";

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
        <p>
          <b>{price}</b>
        </p>
      </div>
      <section>
        <button onClick={handleMealClick}>Add To Cart</button>
      </section>
    </article>
  );
}
