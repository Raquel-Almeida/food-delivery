import React, { useContext } from "react";

import CartContext from "../../../store/CartContext";
import AddThis from "./AddThis";

import "./MealDetails.scss";

export default function MealDetails(props) {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (e) => {
    e.preventDefault();

    cartContext.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: 1,
    });
  };

  return (
    <div className="meal-details-container">
      <div className="meal-details">
        <div className="meal-details-img-container">
          <button className="close-details-button" onClick={props.onCloseDetails}>
            x
          </button>
          <img className="meal-details-img" src={process.env.PUBLIC_URL + `/assets/meals/${props.meal.image}`} alt="Meal" />
        </div>
        <AddThis />
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
          <button className="confirm-details-button" onClick={addToCartHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
