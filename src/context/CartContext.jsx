import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const getItemsQuantity = () => cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const addItemQuantity = (product) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === product.id) == null) {
        return [...currItems, { ...product, quantity: 1 }];
      }
      return currItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseItemQuantity = (product) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === product.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== product.id);
      }
      return currItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{ decreaseItemQuantity, addItemQuantity, cartItems, getItemsQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
