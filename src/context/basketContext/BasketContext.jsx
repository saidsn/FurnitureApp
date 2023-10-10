import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  
  const [basketCount, setBasketCount] = useState(0);

  return (
    <BasketContext.Provider value={{ basketCount, setBasketCount }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
