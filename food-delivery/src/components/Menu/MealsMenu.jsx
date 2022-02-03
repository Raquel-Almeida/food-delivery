import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";
import Meal from "./Meal/Meal";
import MealDetails from "./MealDetails/MealDetails";

import "./MealsMenu.scss";

export default function MealsMenu() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  let [filteredMeals, setFilteredeMeals] = useState([]);
  let [loaded, setLoaded] = useState(false);

  let [showDetails, setShowDetails] = useState(false);
  let [clickedMeal, setClickedMeal] = useState({ image: "", name: null, description: null, extras: [] });

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
    setCurrentPage(1);

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

  // Opens meal details
  const showDetailsHandler = (id) => {
    setClickedMeal(filteredMeals.find((meal) => meal.id === id));
    setShowDetails(true);
    document.body.setAttribute("style", "overflow-y: hidden");
  };

  // Closes meal details
  const closeDetailsHandler = (id) => {
    setShowDetails(false);
    document.body.setAttribute("style", "overflow-y: auto");
  };

  return (
    <section className="meals-menu">
      <div className="meals-menu-header">
        <h2>Our Menu</h2>
        <div className="search-container">
          <Search onSearchInput={handleSearchMeal} />
        </div>
      </div>
      {/* Shows loading message while fetching is not finished*/}
      {loaded ? (
        <section className="meals-list">
          <div className={`${showDetails ? "" : "hidden"}`}>
            <MealDetails meal={clickedMeal} onCloseDetails={closeDetailsHandler} />
          </div>
          <Pagination
            dataLimit={6}
            pageLimit={3}
            list={filteredMeals}
            RenderComponent={Meal}
            onItemClicked={showDetailsHandler}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      ) : (
        <span>Loading...</span>
      )}
    </section>
  );
}
