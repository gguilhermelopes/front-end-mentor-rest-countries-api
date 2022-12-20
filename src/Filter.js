import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [countryInput, setCountryInput] = React.useState("");
  const [regionSelect, setRegionSelect] = React.useState("");

  return (
    <div className={`container ${styles.filter}`}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={countryInput}
        onChange={({ target }) => setCountryInput(target.value)}
      />
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
