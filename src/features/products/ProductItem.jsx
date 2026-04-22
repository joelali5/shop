import { Link } from "react-router-dom";

function Product({ product }) {
  const { id, title, price, description, image, category } = product;

  return (
    <li className="list-none h-full">
      <Link
        to={`/products/${id}`}
        className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
      >
        <div className="relative bg-gray-50 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-60 w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />

          <span className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-full text-gray-600">
            {category || "Uncategorized"}
          </span>
        </div>

        <div className="p-5 flex flex-col h-[180px]">
          <h3 className="font-semibold text-gray-800 line-clamp-2">{title}</h3>

          <p className="text-sm text-gray-500 line-clamp-2 mt-1">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-3">
            <p className="text-lg font-bold text-green-600">
              C${price.toFixed(2)}
            </p>

            <span className="text-xs text-gray-400 group-hover:text-black transition">
              View →
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Product;
