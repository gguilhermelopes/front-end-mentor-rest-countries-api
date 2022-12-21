import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./Hooks/useFetch";
import styles from "./Country.module.css";
import Loading from "./Interface Elements/Loading";
import Error from "./Interface Elements/Error";
import { ReactComponent as Arrow } from "./Assets/arrow_back.svg";
import { ReactComponent as ArrowDarkMode } from "./Assets/arrow_back_darkmode.svg";

const Country = ({ darkTheme }) => {
  const { name } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request(`https://restcountries.com/v2/name/${name}?fullText=true`);
    }
    fetchData();
  }, [request, name]);

  if (loading) return <Loading />;
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
        <Link to="/">
          <button>
            {darkTheme ? <ArrowDarkMode /> : <Arrow />}
            Back
          </button>
        </Link>

        <div className={styles.infoWrapper}>
          <div>
            <img src={data[0].flags.svg} alt={`${data[0].name}'s flag`} />
          </div>
          <div className={styles.divWrapper}>
            <ul className={styles.listWrapper}>
              <h1>{data[0].name}</h1>
              <div>
                <li>
                  <span>Native Name:</span> {data[0].nativeName}
                </li>
                <li>
                  <span>Population:</span>{" "}
                  {data[0].population.toLocaleString("en-US")}
                </li>
                <li>
                  <span>Region:</span> {data[0].region}
                </li>
                <li>
                  <span>Sub Region:</span> {data[0].subregion}
                </li>
                <li>
                  <span>Capital:</span>{" "}
                  {data[0].capital ? data[0].capital : "None"}
                </li>
              </div>
              <div>
                <li>
                  <span>Top Level Domain:</span> {data[0].topLevelDomain}
                </li>
                <li>
                  <span>Currencies:</span>{" "}
                  {data[0].currencies ? data[0].currencies[0].name : "None"}
                </li>
                <li>
                  <span>Languages:</span>{" "}
                  {data[0].languages
                    .map((language) => language.name)
                    .join(", ")}
                </li>
              </div>
            </ul>
            <div className={styles.bordersWrapper}>
              <span>Border Countries</span>
              <div>
                <ul className={styles.borders}>
                  {data[0].borders ? (
                    data[0].borders.map((item) => <li key={item}>{item}</li>)
                  ) : (
                    <li>None</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else return null;
};

export default Country;
