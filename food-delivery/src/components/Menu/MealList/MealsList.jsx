import React, { useState } from "react";
import MealDetails from "../MealDetails/MealDetails";
import Pagination from "../Pagination/Pagination";
import Meal from "./Meal";

import "./MealsList.scss";

export default function MealsList(props) {
  //**TODO** Open meal details
  const handleMealInfo = (id) => {
    console.log("Meal details " + id);
    setShowDetails(true);
  };

  let [showDetails, setShowDetails] = useState(false);

  return (
    <section className="meals-list">
      <Pagination dataLimit={1} pageLimit={3} list={props.meals} RenderComponent={Meal} onItemClicked={handleMealInfo} />
      <div className={`${showDetails ? "" : "hidden"}`}>
        <MealDetails />
      </div>
    </section>
  );
}
