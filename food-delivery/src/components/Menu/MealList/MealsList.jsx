import React from "react";
import Pagination from "../Pagination/Pagination";
import Meal from "./Meal";

import "./MealsList.scss";

export default function MealsList(props) {
  const handleMealInfo = (id) => {
    props.onMealInfo(id);
  };

  return (
    <>
      <section className="meals-list">
        {/* <Pagination dataLimit={6} pageLimit={3} list={props.meals} RenderComponent={Meal} /> */}
        {props.meals.map((m, index) => (
          <Meal meals={m} key={index} onMealClick={handleMealInfo} />
        ))}
      </section>
    </>
  );
}
