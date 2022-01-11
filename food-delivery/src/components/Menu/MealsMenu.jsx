import React, { useState, useEffect } from "react";
import MealsList from "./MealList/MealsList";
import Search from "./Search/Search";

import "./MealsMenu.scss";

export default function MealsMenu() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://e515-85-241-81-222.ngrok.io/meals") // ngrok
      // fetch("http://localhost:3001/meals")
      .then((resp) => resp.json())
      .then((data) => setMeals(data));
  }, []);

  const handleMealInfo = (id) => {
    console.log(id);
  };

  return (
    <section className="meals-menu">
      <div className="meals-menu-header">
        <h2>Our Menu</h2>
        <div className="search-container">
          <Search />
        </div>
      </div>
      <MealsList meals={meals} onMealInfo={handleMealInfo} />
    </section>
  );
}
