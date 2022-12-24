import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./Hooks/useFetch";
import styles from "./Country.module.css";
import Loading from "./Interface Elements/Loading";
import Error from "./Interface Elements/Error";
import { ReactComponent as Arrow } from "./Assets/arrow_back.svg";
import { ReactComponent as ArrowDarkMode } from "./Assets/arrow_back_darkmode.svg";

const Country = ({ darkTheme }) => {
  const { name } = useParams();
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      await request(`https://restcountries.com/v2/all`);
    }
    fetchData();
  }, [request, name]);

  if (loading) return <Loading darkTheme={darkTheme} />;
  if (error) return <Error />;
  if (data) {
    return (
      <section
        className={`container ${
          darkTheme
            ? `darkTheme ${styles.countryPage}`
            : `${styles.countryPage}`
        } `}
      >
        <button onClick={() => navigate(-1)}>
          {darkTheme ? <ArrowDarkMode /> : <Arrow />}
          Back
        </button>

        {data
          .filter((value) => {
            if (name === value.name) {
              return value;
            } else return null;
          })
          .map((item) => (
            <div key={item.name} className={styles.infoWrapper}>
              <div>
                <img src={item.flags.svg} alt={`${item.name}'s flag`} />
              </div>
              <div className={styles.divWrapper}>
                <ul className={styles.listWrapper}>
                  <h1>{item.name}</h1>
                  <div>
                    <li>
                      <span>Native Name:</span> {item.nativeName}
                    </li>
                    <li>
                      <span>Population:</span>{" "}
                      {item.population.toLocaleString("en-US")}
                    </li>
                    <li>
                      <span>Region:</span> {item.region}
                    </li>
                    <li>
                      <span>Sub Region:</span> {item.subregion}
                    </li>
                    <li>
                      <span>Capital:</span>{" "}
                      {item.capital ? item.capital : "None"}
                    </li>
                  </div>
                  <div>
                    <li>
                      <span>Top Level Domain:</span> {item.topLevelDomain}
                    </li>
                    <li>
                      <span>Currencies:</span>{" "}
                      {item.currencies ? item.currencies[0].name : "None"}
                    </li>
                    <li>
                      <span>Languages:</span>{" "}
                      {item.languages
                        .map((language) => language.name)
                        .join(", ")}
                    </li>
                  </div>
                </ul>
                <div className={styles.bordersWrapper}>
                  <span>Border Countries</span>
                  <div>
                    <ul
                      className={`${
                        darkTheme
                          ? `darkTheme ${styles.borders}`
                          : `${styles.borders}`
                      }`}
                    >
                      {item.borders ? (
                        data
                          .filter((value) => {
                            return item.borders.includes(value.alpha3Code);
                          })
                          .map((value) => (
                            <Link
                              key={value.nativeName}
                              to={`/country/${value.name}`}
                            >
                              <li>{value.name}</li>
                            </Link>
                          ))
                      ) : (
                        <li>None</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    );
  } else return null;
};

export default Country;
