import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import styles from "./Country.module.css";

const Country = () => {
  const { name } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request(`https://restcountries.com/v2/name/${name}?fullText=true`);
    }
    fetchData();
  }, [request, name]);

  return (
    <section className={`container ${styles.countryPage}`}>
      {data && (
        <div className={styles.infoWrapper}>
          <div>
            <img src={data[0].flags.svg} alt={`${data[0].name}'s flag`} />
          </div>
          <div className={styles.divWrapper}>
            <ul className={styles.listWrapper}>
              <h1>{data[0].name}</h1>
              <li>
                <span>Native Name:</span> {data[0].nativeName}
              </li>
              <li>
                <span>Population:</span> {data[0].population}
              </li>
              <li>
                <span>Region:</span> {data[0].region}
              </li>
              <li>
                <span>Sub Region:</span> {data[0].subregion}
              </li>
              <li>
                <span>Capital:</span> {data[0].capital}
              </li>
              <li>
                <span>Top Level Domain:</span> {data[0].topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span> {data[0].currencies[0].name}
              </li>
              <li>
                <span>Languages:</span>{" "}
                {data[0].languages.map((language) => language.name).join(", ")}
              </li>
            </ul>
            <p>
              <span>Border Countries:</span>
              {data[0].borders.join(" ")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Country;
