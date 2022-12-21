import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ darkTheme }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`container ${styles.loading} ${
          darkTheme ? "darkTheme lds-default" : "lds-default"
        } `}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
