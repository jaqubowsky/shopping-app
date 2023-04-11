import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { useMemo } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products, { loader as productsLoader } from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import { CartProvider } from "./context/CartContext";
import { GlobalStyle, Theme } from "./styles/index";

function App() {
  const routes = useMemo(
    () =>
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="products" loader={productsLoader} element={<Products />} />
          <Route index path="contact" element={<Contact />} />
        </Route>
      ),
    []
  );

  const router = createBrowserRouter(routes);

  return (
    <CartProvider>
      <Theme>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Theme>
    </CartProvider>
  );
}

export default App;
