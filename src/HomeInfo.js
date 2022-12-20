import React from "react";
import useFetch from "./useFetch";
import styles from "./HomeInfo.module.css";
import { Link } from "react-router-dom";

const HomeInfo = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request("https://restcountries.com/v2/all");
    }
    fetchData();
  }, [request]);

  return (
    <section className={`container`}>
      <ul className={styles.ul}>
        {data &&
          data.map((item) => (
            <li className={styles.item} key={item.numericCode}>
              <Link to={`country/${item.name}`}>
                <img src={item.flags.svg} alt={`${item.name}'s flag`} />
              </Link>
              <ul className={styles.itemList}>
                <h1>{item.name}</h1>
                <li>
                  <span>Population:</span> {item.population}
                </li>
                <li>
                  <span>Region:</span> {item.region}
                </li>
                <li>
                  <span>Capital:</span> {item.capital}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default HomeInfo;
