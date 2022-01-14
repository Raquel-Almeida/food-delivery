import React, { useState, useEffect } from "react";
import MealsList from "./MealList/MealsList";
import Search from "./Search/Search";
import MealDetails from "./MealDetails/MealDetails";

import "./MealsMenu.scss";

export default function MealsMenu() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  let [filteredMeals, setFilteredeMeals] = useState([]);

  useEffect(() => {
    fetch("https://61ddf60af60e8f0017668b59.mockapi.io/api/menu")
      .then((resp) => {
        if (resp.ok) return resp.json();
        throw new Error("Oops! Something went wrong while requesting meals.");
      })
      .then((data) => {
        setMeals(data);
        setFilteredeMeals(data);
      })
      .catch((error) => setError(error.message));
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

  if (error) return <p className="error">{error}</p>;

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
