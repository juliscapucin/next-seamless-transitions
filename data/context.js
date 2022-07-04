import React, { useState, useContext, useEffect, useMemo } from "react";

import products from "./products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProducts] = useState(products);
  const [idSelected, setIdSelected] = useState(0);

  const contextValue = useMemo(
    () => ({
      allProducts,
      idSelected,
      setIdSelected,
    }),
    [allProducts, idSelected, setIdSelected]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
