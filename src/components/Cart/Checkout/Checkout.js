import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/CartContext";
import Meal from "../../meals/Meal/Meal.js";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = ({ hideCheckoutHandler }) => {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Close}>
        <FontAwesomeIcon icon={faXmark} onClick={hideCheckoutHandler} />
      </div>
      <div className={classes.CheckoutDetail}>
        <header className={classes.Header}>
          <h2>Items Detail</h2>
        </header>
        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <div>
            <p className={classes.Price}>{ctx.totalPrice}</p>
          </div>
        </footer>
      </div>
      <Bar />
    </div>,
    checkoutRoot
  );
};

export default Checkout;
