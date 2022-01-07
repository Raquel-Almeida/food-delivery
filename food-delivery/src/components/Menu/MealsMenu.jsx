import React from "react";
import { useState, useEffect } from "react";
import MealsList from "./MealsList";
import "./MealsMenu.css";

export default function MealsMenu() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
      .then((resp) => resp.json())
      .then((data) => setMeals(data));
  }, []);

  const handleMealInfo = (id) => {
    console.log(id);
  };

  return (
    <section className="meals-menu">
      <h2>Our Menu</h2>
      <MealsList meals={meals} onMealInfo={handleMealInfo} />
    </section>
  );
}
