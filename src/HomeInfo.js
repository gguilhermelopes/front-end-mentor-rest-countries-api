import React from "react";
import useFetch from "./Hooks/useFetch";
import styles from "./HomeInfo.module.css";
import { Link } from "react-router-dom";
import Loading from "./Interface Elements/Loading";
import Error from "./Interface Elements/Error";
import { GlobalContext } from "./Hooks/GlobalContext";

const HomeInfo = ({ darkTheme }) => {
  const { data, loading, error, request } = useFetch();
  const { countryInput, regionSelect } = React.useContext(GlobalContext);

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
          {data
            .filter((value) => {
              if (countryInput === "") {
                return value;
              } else if (
                value.name
                  .toLowerCase()
                  .includes(countryInput.toLowerCase().trimStart())
              ) {
                return value;
              } else {
                return null;
              }
            })
            .filter((value) => {
              if (regionSelect === "" || regionSelect.includes("All")) {
                return value;
              } else if (value.region.includes(regionSelect)) {
                return value;
              } else {
                return null;
              }
            })
            .map((item) => (
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
                  <li>
                    <h2>{item.name}</h2>
                  </li>
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
