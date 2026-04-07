const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed fetching products!");
  const data = await res.json();

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed fetching product");
  const data = await res.json();

  return data;
}
