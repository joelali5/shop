const API_URL = "https://api.escuelajs.co/api/v1";

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

export async function getAllCategories() {
  const res = await fetch(`${API_URL}/categories`);
  if (!res.ok) throw new Error("Error fetching Categories");
  const data = await res.json();

  return data;
}

export async function getCategoryProducts(id) {
  const res = await fetch(`${API_URL}/categories/${id}/products`);
  if (!res.ok) throw new Error("Failed fetching this category");

  const data = await res.json();
  return data;
}
