import React, { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import StyledProductsWrapper from "./Products.styled";
import getProducts from "../../api";
import ProductCard from "./ProductCard";
import { useCart } from "../../context/CartContext";

export async function loader() {
  return defer({
    products: getProducts()
  });
}

function Products() {
  const productsData = useLoaderData();
  const { addItemQuantity } = useCart();

  function renderProducts(products) {
    return products.map((product) => (
      <ProductCard
        item={product}
        key={product.id}
        name={product.title}
        price={product.price}
        img={product.image}
        handleUpdateCart={() => addItemQuantity(product)}
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

export default Products;
