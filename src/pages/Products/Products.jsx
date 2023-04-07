import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import getProducts from "../../api";

export async function loader() {
  return defer({ products: getProducts() });
}

export default function Products() {
  const productsData = useLoaderData();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={productsData.products}>
        {(products) =>
          products.map((product) => (
            <div>
              <h1>{product.title}</h1>
              <img src={product.image} />
            </div>
          ))
        }
      </Await>
    </Suspense>
  );
}
