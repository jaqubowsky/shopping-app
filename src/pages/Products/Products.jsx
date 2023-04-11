import React, { Suspense, useState } from "react";
import { defer, useLoaderData, Await, useSearchParams } from "react-router-dom";
import { StyledProductsWrapper, StyledCategoryWrapper } from "./Products.styled";
import Category from "./Category";
import getProducts from "../../api/api";
import ProductCard from "./ProductCard";
import Loader from "../../components/spinner";
import { useCart } from "../../context/CartContext";

export async function loader() {
  return defer({
    products: getProducts()
  });
}

function Products() {
  const productsData = useLoaderData();
  const { addItemQuantity } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");

  function filterProducts(products) {
    return categoryFilter
      ? products.filter((product) => product.category === categoryFilter)
      : products;
  }

  function renderCategories(products) {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];

    return uniqueCategories.map((category) => (
      <Category
        key={category}
        isActive={category === categoryFilter}
        name={category}
        handleClick={() => setSearchParams({ category })}
      />
    ));
  }

  function renderProducts(products) {
    const filteredProducts = filterProducts(products);

    return filteredProducts.map((product) => (
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
    <Suspense fallback={<Loader />}>
      <Await resolve={productsData.products}>
        {(products) => (
          <StyledCategoryWrapper>
            {renderCategories(products)}
            <Category name="Clear filters" handleClick={() => setSearchParams({})} />
          </StyledCategoryWrapper>
        )}
      </Await>
      <StyledProductsWrapper>
        <Await resolve={productsData.products}>{renderProducts}</Await>
      </StyledProductsWrapper>
    </Suspense>
  );
}

export default Products;
