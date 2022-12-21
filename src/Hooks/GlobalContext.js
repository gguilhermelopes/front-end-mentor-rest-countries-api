import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [countryInput, setCountryInput] = React.useState("");
  const [regionSelect, setRegionSelect] = React.useState("");

  return (
    <GlobalContext.Provider
      value={{ countryInput, setCountryInput, regionSelect, setRegionSelect }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
