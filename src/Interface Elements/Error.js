import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={`container ${styles.error}`}>
      An error occurred. Please return to the Homepage or try again later.
    </div>
  );
};

export default Error;
