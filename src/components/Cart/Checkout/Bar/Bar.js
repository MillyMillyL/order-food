import React, { useContext } from "react";
import classes from "./Bar.module.css";
import CartContext from "../../../../store/CartContext";

const Bar = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.Bar}>
      <p className={classes.Price}>{ctx.totalPrice}</p>
      <button className={classes.Button}>Pay</button>
    </div>
  );
};

export default Bar;
