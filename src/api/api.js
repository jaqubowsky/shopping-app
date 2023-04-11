export default async function getProducts() {
  const fetchData = await fetch("https://fakestoreapi.com/products?limit=15");
  return fetchData.json();
}
