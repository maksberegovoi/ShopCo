import React from "react";
import styles from "./MyButton.module.scss";
import { useNavigate } from "react-router-dom";

const MyButton = ({
  children,
  classname = "",
  handleClick,
  to,
  type = "button",
  ...props
}) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (handleClick) {
      handleClick(e);
    }
    if (to && !e.defaultPrevented) {
      navigate(to);
    }
  };

  return (
    <button
      className={`${styles.MyButton} ${classname}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
