import React from "react";
import classes from "./CheckoutItem.module.css";
import Counter from "../../../UI/Counter/Counter";

const CheckoutItem = ({ item }) => {
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.ImgBox}>
        <img src={item.img} />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{item.title}</h2>
        <div className={classes.PriceWrapper}>
          <Counter meal={item} />
          <span className={classes.Price}>{item.price * item.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
