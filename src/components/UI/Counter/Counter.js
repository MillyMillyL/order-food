import React from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/CartContext";
import { useContext } from "react";

const Counter = ({ meal }) => {
  const ctx = useContext(CartContext);

  const addButtonHandler = () => {
    ctx.cartDispatch({ type: "ADD", meal: meal });
  };

  const subButtonHandler = () => {
    ctx.cartDispatch({ type: "REMOVE", meal: meal });
  };

  return (
    <div className={classes.Counter}>
      {meal.amount && meal.amount !== 0 ? (
        <>
          <button className={classes.Sub} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Count}>{meal.amount}</span>
        </>
      ) : null}

      <button className={classes.Add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
