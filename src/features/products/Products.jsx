import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import Product from "./ProductItem";

function Products() {
  const { products } = useLoaderData();

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Discover Your Style
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
              Shop the latest trends with premium quality products curated just
              for you.
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-40 h-40 bg-gray-100 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Featured Products
          </h3>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default Products;
