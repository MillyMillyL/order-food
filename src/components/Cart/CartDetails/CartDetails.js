import React, { useContext, useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/CartContext.js";
import Meal from "../../meals/Meal/Meal.js";
import Confirm from "../../UI/Confirm/Confirm.js";

const CartDetails = () => {
  const ctx = useContext(CartContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const showConfirmHandler = () => {
    setShowConfirm(true);
  };
  const onCancel = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  const onConfirm = () => {
    ctx.cartDispatch({ type: "CLEAR" });
  };

  return (
    <Backdrop onClick={onCancel}>
      {showConfirm && (
        <Confirm
          confirmText="Are you sure to empty the shopping cart?"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}
      <div onClick={(e) => e.stopPropagation()} className={classes.CartDetails}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Cart Details</h2>
          <div className={classes.Clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Clear Cart Items</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal noDesc="true" key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
