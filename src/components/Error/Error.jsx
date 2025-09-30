import React from "react";
import styles from "./Error.module.scss";

const Error = ({
  message = "Something went wrong, please try again later...",
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Error</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Error;
