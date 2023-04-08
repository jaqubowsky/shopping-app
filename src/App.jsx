import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { useState, useMemo } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CartContext from "./components/Cart/CartContext";
import Products, { loader as productsLoader } from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const updateCartItems = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const providerValue = useMemo(
    () => ({
      cartItems,
      updateCartItems
    }),
    [cartItems, setCartItems, updateCartItems]
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path="products" loader={productsLoader} element={<Products />} />
        <Route index path="contact" element={<Contact />} />
      </Route>
    )
  );

  console.log(cartItems);

  return (
    <CartContext.Provider value={providerValue}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
