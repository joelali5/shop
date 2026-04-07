import { getProducts } from "../../services/apiProducts";
import { useLoaderData } from "react-router-dom";
import Product from "./ProductItem";
import BackBtn from "../../ui/BackBtn";

function Men() {
  const products = useLoaderData();
  const mens = products.filter(product => product.category === "men's clothing");

  if (!mens || mens.length === 0) {
    return (
      <>
        <BackBtn route={-1} />
        <div className="text-center py-10">
          <p className="text-gray-500">No products found in this category</p>
        </div>
      </>
    );
  }

  return (
    <>
      <BackBtn route={-1} />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Men's Collection</h1>

        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {mens.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Men;
