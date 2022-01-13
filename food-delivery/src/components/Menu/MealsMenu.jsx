import React, { useState, useEffect } from "react";
import MealsList from "./MealList/MealsList";
import Search from "./Search/Search";
import MealDetails from "./MealDetails/MealDetails";

import "./MealsMenu.scss";

export default function MealsMenu() {
  let [meals, setMeals] = useState([]);

  let [filteredMeals, setFilteredeMeals] = useState([]);

  useEffect(() => {
    // fetch("https://e515-85-241-81-222.ngrok.io/meals") // ngrok
    fetch("http://localhost:3001/meals")
      .then((resp) => resp.json())
      .then((data) => {
        setMeals(data);
        setFilteredeMeals(data);
      });
  }, []);

  const handleMealInfo = (id) => {
    console.log(id);
  };

  const handleSearchMeal = (searchValue) => {
    setFilteredeMeals(
      meals.filter((meal) => {
        return meal.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };

  return (
    <section className="meals-menu">
      <div className="meals-menu-header">
        <h2>Our Menu</h2>
        <div className="search-container">
          <Search onSearchInput={handleSearchMeal} />
        </div>
      </div>
      <MealsList meals={filteredMeals} onMealInfo={handleMealInfo} />
      <MealDetails />
    </section>
  );
}
