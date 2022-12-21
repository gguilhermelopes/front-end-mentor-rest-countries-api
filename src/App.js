import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Country from "./Country";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  if (darkTheme) {
    document.body.classList.add("darkTheme");
  } else {
    document.body.classList.remove("darkTheme");
  }

  return (
    <BrowserRouter>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home darkTheme={darkTheme} />} />
          <Route
            path="country/:name"
            element={<Country darkTheme={darkTheme} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
