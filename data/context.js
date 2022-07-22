import React, { useState, useContext } from "react";

import products from "./products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProducts] = useState(products);
  const [idSelected, setIdSelected] = useState(0);
  const [showHome, setShowHome] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [productPage, setProductPage] = useState(false);

  const contextValue = {
    allProducts,
    idSelected,
    setIdSelected,
    showHome,
    setShowHome,
    showPage,
    setShowPage,
    productPage,
    setProductPage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
