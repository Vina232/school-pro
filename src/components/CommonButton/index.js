import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./styles";
import classNames from "classnames";

function CommonButton({ buttonText, onClick, className }) {
  const classes = useStyles();

  return (
    <div>
      <button
        className={classNames(classes.buttonStyle, className)}
        onClick={onClick}
      >
        {buttonText}
      </button>
      {/* <button
         className={classNames(classes.buttonStyle,className)}
         onClick={onClick}
       >
         {buttonText} <button/> */}
    </div>
  );
}

export default CommonButton;
