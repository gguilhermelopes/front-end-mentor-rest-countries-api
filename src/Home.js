import React from "react";
import Filter from "./Filter";
import HomeInfo from "./HomeInfo";

const Home = ({ darkTheme }) => {
  return (
    <section>
      <Filter darkTheme={darkTheme} />
      <HomeInfo darkTheme={darkTheme} />
    </section>
  );
};

export default Home;
