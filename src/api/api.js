export default async function getProducts() {
  const fetchData = await fetch("https://fakestoreapi.com/products?limit=21");
  return fetchData.json();
}
