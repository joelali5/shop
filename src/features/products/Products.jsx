import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import Product from "./ProductItem";
import BackBtn from "../../ui/BackBtn";

function Products() {
  const { products } = useLoaderData();

  if (!products || products.length === 0) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <>
      <BackBtn route={-1} />
      <div className="container mx-auto px-4 py-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default Products;
