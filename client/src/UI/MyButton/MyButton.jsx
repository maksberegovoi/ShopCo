import React from "react";
import styles from "./MyButton.module.scss";

const MyButton = ({ children, type = "button", classname = "" }) => {
  return (
    <button type={type} className={`${styles.MyButton} ${classname}`}>
      {children}
    </button>
  );
};

export default MyButton;
