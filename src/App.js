import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Country from "./Country";
import Header from "./Header";
import Home from "./Home";
import { GlobalStorage } from "./Hooks/GlobalContext";

const App = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);

  React.useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
  }, [darkTheme]);

  return (
    <HashRouter>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main>
        <GlobalStorage>
          <Routes>
            <Route path="/" element={<Home darkTheme={darkTheme} />} />
            <Route
              path="country/:name"
              element={<Country darkTheme={darkTheme} />}
            />
          </Routes>
        </GlobalStorage>
      </main>
    </HashRouter>
  );
};

export default App;
