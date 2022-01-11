import React from "react";
import Meal from "./Meal";

import "./MealsList.scss";

export default function MealsList(props) {
  const handleMealInfo = (id) => {
    props.onMealInfo(id);
  };

  return (
    <section className="meals-list">
      {props.meals.map((m) => (
        <Meal meals={m} key={m.id} onMealClick={handleMealInfo} onDelete={props.onDelete} />
      ))}
    </section>
  );
}
