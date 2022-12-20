import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">Where in the world?</Link>
        <button>Dark Mode</button>
      </nav>
    </header>
  );
};

export default Header;
