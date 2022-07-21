import React, { useState, useContext } from "react";

import products from "./products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProducts] = useState(products);
  const [idSelected, setIdSelected] = useState(0);
  const [showHome, setShowHome] = useState(false);

  const contextValue = {
    allProducts,
    idSelected,
    setIdSelected,
    showHome,
    setShowHome,
  };

  return (
    <AppContext.Provider
      value={{ allProducts, idSelected, setIdSelected, showHome, setShowHome }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
