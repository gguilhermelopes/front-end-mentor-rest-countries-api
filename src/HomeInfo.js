import React from "react";
import useFetch from "./Hooks/useFetch";
import styles from "./HomeInfo.module.css";
import { Link } from "react-router-dom";
import Loading from "./Interface Elements/Loading";
import Error from "./Interface Elements/Error";

const HomeInfo = ({ darkTheme }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request("https://restcountries.com/v2/all");
    }
    fetchData();
  }, [request]);

  if (loading) return <Loading darkTheme={darkTheme} />;
  if (error) return <Error />;
  if (data)
    return (
      <section className={`container`}>
        <ul
          className={`${
            darkTheme ? `darkTheme ${styles.ul}` : `${styles.ul}`
          } `}
        >
          {data.map((item) => (
            <li
              className={`${
                darkTheme ? `darkTheme ${styles.item}` : `${styles.item}`
              } `}
              key={item.numericCode}
            >
              <Link to={`country/${item.name}`}>
                <img src={item.flags.svg} alt={`${item.name}'s flag`} />
              </Link>
              <ul
                className={`${
                  darkTheme
                    ? `darkTheme ${styles.itemList}`
                    : `${styles.itemList}`
                } `}
              >
                <h1>{item.name}</h1>
                <li>
                  <span>Population:</span>{" "}
                  {item.population.toLocaleString("en-US")}
                </li>
                <li>
                  <span>Region:</span> {item.region}
                </li>
                <li>
                  <span>Capital:</span> {item.capital ? item.capital : "None"}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    );
  else return null;
};

export default HomeInfo;
