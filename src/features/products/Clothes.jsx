import { getCategoryProducts } from "../../services/apiProducts";
import { useLoaderData } from "react-router-dom";
import Product from "./ProductItem";
import BackBtn from "../../ui/BackBtn";

function Clothes() {
  const products = useLoaderData();

  if (!products || products.length === 0) {
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
        <h1 className="text-2xl font-bold mb-6">Clothes Collection</h1>

        {/* Responsive grid with auto-rows-fr for equal height rows */}
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
  const products = await getCategoryProducts(1);
  return products;
}

export default Clothes;
