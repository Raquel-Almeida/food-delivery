import React from "react";
import Meal from "./Meal";

import "./MealsList.scss";

export default function MealsList(props) {
  return (
    <section className="meals-list">
      {props.meals.map((m) => (
        <Meal meals={m} key={m.id} onDelete={props.onDelete} />
      ))}
    </section>
  );
}
