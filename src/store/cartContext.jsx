import { createContext, useState } from "react";

export const CartContext = createContext({
  cartCount: 0,
  addToCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((prevCount) => prevCount + 1);
  }

  const contextValue = {
    cartCount,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}