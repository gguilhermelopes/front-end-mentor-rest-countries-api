import React from "react";
import styles from "./Filter.module.css";
import { ReactComponent as Search } from "./Assets/search.svg";
import { ReactComponent as SearchDarkMode } from "./Assets/search_darkmode.svg";

const Filter = ({ darkTheme }) => {
  const [countryInput, setCountryInput] = React.useState("");
  const [regionSelect, setRegionSelect] = React.useState("");

  return (
    <div
      className={`container ${
        darkTheme ? `darkTheme ${styles.filter}` : `${styles.filter}`
      } `}
    >
      <label>
        {darkTheme ? <SearchDarkMode /> : <Search />}
        <input
          type="text"
          placeholder="Search for a country..."
          value={countryInput}
          onChange={({ target }) => setCountryInput(target.value)}
        />
      </label>
      <select
        value={regionSelect}
        onChange={({ target }) => setRegionSelect(target.value)}
      >
        <option disabled value="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
