import React from "react";
import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";

const Meal = ({ noDesc, meal, addMealHandler, subMealHandler }) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={meal.img} />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{meal.title}</h2>
        {noDesc ? null : <p className={classes.Desc}>{meal.desc}</p>}

        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>{meal.price}</span>
          <Counter meal={meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
