import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-6xl mb-4">🛒</div>

      <h2 className="text-2xl font-semibold text-gray-900">
        Your cart is empty
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Looks like you haven’t added anything yet. Start exploring and find
        something you love.
      </p>

      <Link
        to="/"
        className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
