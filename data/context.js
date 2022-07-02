import React, { useState, useContext } from "react";

import products from "./products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProducts] = useState(products);

  return (
    <AppContext.Provider
      value={{
        allProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
