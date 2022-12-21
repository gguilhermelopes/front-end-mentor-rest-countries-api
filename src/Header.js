import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dark } from "./Assets/dark_mode.svg";
import { ReactComponent as Light } from "./Assets/light_mode.svg";

const Header = ({ darkTheme, setDarkTheme }) => {
  function handleClick() {
    setDarkTheme(!darkTheme);
  }

  return (
    <header
      className={darkTheme ? `darkTheme ${styles.header}` : `${styles.header}`}
    >
      <nav
        className={`container ${
          darkTheme ? `darkTheme ${styles.nav}` : `${styles.nav}`
        } `}
      >
        <Link to="/">Where in the world?</Link>
        <button onClick={handleClick}>
          {darkTheme ? <Dark /> : <Light />}
          {darkTheme ? `Dark Mode` : "Light Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
