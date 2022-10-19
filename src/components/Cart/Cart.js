import React, { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/CartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx]);

  const showDetailsHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowDetails(!showDetails);
  };

  const showCheckoutHandler = () => {
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.Cart} onClick={showDetailsHandler}>
      {showCheckout && <Checkout hideCheckoutHandler={hideCheckoutHandler} />}
      //showdetails has a problem
      {showDetails && <CartDetails />}
      <div className={classes.IconWrapper}>
        <FontAwesomeIcon icon={faShoppingCart} className={classes.Icon} />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>No Items in Cart</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}
      <button
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ""
        }`}
        onClick={showCheckoutHandler}
      >
        Go Checkout
      </button>
    </div>
  );
};

export default Cart;
