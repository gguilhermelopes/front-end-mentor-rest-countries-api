import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Country from "./Country";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:name" element={<Country />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
