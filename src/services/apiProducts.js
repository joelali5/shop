
const API_URL = "/products";

export async function getProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed fetching products!");

  const data = await res.json();
  

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
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

export async function getCategory(category) {
  const res = await fetch(`${API_URL}/category/${category}`);
  if (!res.ok) throw new Error("Failed fetching this category");

  const data = await res.json();
  return data;
}
