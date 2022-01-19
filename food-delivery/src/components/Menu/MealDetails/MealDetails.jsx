import React from "react";

import "./MealDetails.scss";

export default function MealDetails(props) {
  // **TODO**
  const confirmMealHandler = () => {
    console.log("Confirm");
  };

  return (
    <div className="meal-details-container">
      <div className="meal-details">
        <div className="meal-details-img-container">
          <button className="close-details-button" onClick={props.onCloseDetails}>
            x
          </button>
          <img className="meal-details-img" src={`assets/${props.meal.image}`} alt="Meal" />
        </div>
        <div className="meal-details-info">
          <h4>{props.meal.name}</h4>
          <p className="meal-details-description">{props.meal.description}</p>
          <p className="toppings-title">Choose your extras:</p>
          <form>
            {props.meal.extras.map((extra, i) => {
              return (
                <div className="meal-extras" key={i}>
                  <input type="checkbox" name="extra" />
                  <label>{extra}</label>
                </div>
              );
            })}
          </form>
          <button className="confirm-details-button" onClick={confirmMealHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
