import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense, useContext } from "react";
import StyledProductsWrapper from "./Products.styled";
import getProducts from "../../api";
import ProductCard from "./ProductCard";
import CartContext from "../../components/Cart/CartContext";

export async function loader() {
  return defer({
    products: getProducts()
  });
}

export default function Products() {
  const productsData = useLoaderData();

  const { updateCartItems } = useContext(CartContext);

  function renderProducts(products) {
    return products.map((product) => (
      <ProductCard
        item={product}
        key={product.id}
        name={product.title}
        price={product.price}
        img={product.image}
        handleUpdateCart={() => updateCartItems(product)}
      />
    ));
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <StyledProductsWrapper>
        <Await resolve={productsData.products}>{renderProducts}</Await>
      </StyledProductsWrapper>
    </Suspense>
  );
}
