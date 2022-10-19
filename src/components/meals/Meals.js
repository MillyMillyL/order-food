import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

const Meals = ({ mealsData, addMealHandler, subMealHandler }) => {
  return (
    <div className={classes.Meals}>
      {mealsData.map((meal) => (
        <Meal meal={meal} key={meal.id} />
      ))}
    </div>
  );
};

export default Meals;
