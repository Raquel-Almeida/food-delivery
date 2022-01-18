import React, { useState, useEffect } from "react";
import MealsList from "./MealList/MealsList";
import Search from "./Search/Search";

import "./MealsMenu.scss";

export default function MealsMenu() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  let [filteredMeals, setFilteredeMeals] = useState([]);
  let [loaded, setLoaded] = useState(false);

  // Fetches values from API & sets initial list values
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

  // Filters each meal by searched value and returns the ones that include it as a title, setting filtered meals
  const handleSearchMeal = (searchValue) => {
    setFilteredeMeals(
      meals.filter((meal) => {
        return meal.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };
  // Return an error if something goes wrong while fetching data from API
  if (error) return <p className="error">{error}</p>;

  // Once the data is fetched, sets loaded variable to true (only happens once, when "loaded" is false)
  if (filteredMeals.length > 0 && !loaded) {
    setLoaded(true);
  }

  return (
    <section className="meals-menu">
      <div className="meals-menu-header">
        <h2>Our Menu</h2>
        <div className="search-container">
          <Search onSearchInput={handleSearchMeal} />
        </div>
      </div>
      {/* Shows loading message while fetching is not finished*/}
      {loaded ? <MealsList meals={filteredMeals} /> : <span>Loading...</span>}{" "}
    </section>
  );
}
