import { Link } from "react-router-dom";

function Product({ product }) {
  const { id, title, price, description, images, category } = product;
  const productImage = images?.[0]

  return (
    <Link to={`/products/${id}`} className="block h-full">
      <li className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-100">
          <img
            src={productImage}
            className="w-full h-full object-cover"
            alt={title}
          />
        </div>

        <div className="flex flex-col flex-grow p-4">
          <h3 className="font-roboto text-lg font-bold line-clamp-2 min-h-[3.5rem]">
            {title}
          </h3>

          <div className="flex-grow">
            <p className="text-sm text-gray-600 line-clamp-3 mb-3">
              {description}
            </p>
          </div>

          <div className="mt-auto space-y-2">
            <p className="text-xs uppercase text-stone-400 tracking-wider">
              {category?.name || "Uncategorized"}
            </p>
            <p className="text-xl font-bold text-green-600">
              £{price.toFixed(2)}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Product;