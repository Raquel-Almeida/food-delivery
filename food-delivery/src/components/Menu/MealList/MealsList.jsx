import React, { useState } from "react";
import MealDetails from "../MealDetails/MealDetails";
import Pagination from "../Pagination/Pagination";
import Meal from "./Meal";

import "./MealsList.scss";

export default function MealsList(props) {
  let [showDetails, setShowDetails] = useState(false);

  // Open meal details
  const showDetailsHandler = (id) => {
    setShowDetails(true);
  };

  // Closes meal details
  const closeDetailsHandler = (id) => {
    setShowDetails(false);
  };

  return (
    <section className="meals-list">
      <div className={`${showDetails ? "" : "hidden"}`}>
        <MealDetails onCloseDetailsHandler={closeDetailsHandler} />
      </div>
      <Pagination dataLimit={6} pageLimit={3} list={props.meals} RenderComponent={Meal} onItemClicked={showDetailsHandler} />
    </section>
  );
}
