import React from "react";

import "./Meal.scss";

export default function Meal(props) {
  let { id, imageUrl, title, description, price } = props.meals;

  const handleMealInfo = () => {
    props.onMealInfo(id);
  };

  return (
    <article className="meal">
      <img src={`assets/${imageUrl}`} alt="Meal" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <b>{price}</b>
        </p>
      </div>
      <section>
        <button onClick={handleMealInfo}>Add To Cart</button>
      </section>
    </article>
  );
}
