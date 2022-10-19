import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";

const Confirm = ({ confirmText, onConfirm, onCancel }) => {
  return (
    <Backdrop className={classes.ConfirmOutter}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{confirmText}</p>
        <div className={classes.BtnOutter}>
          <button
            onClick={(e) => {
              onCancel(e);
            }}
            className={classes.CancelBtn}
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              onConfirm(e);
            }}
            className={classes.ConfirmBtn}
          >
            Confirm
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
