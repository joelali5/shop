import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import BackBtn from "../../ui/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

function Item() {
  const item = useLoaderData();
  const { id, image, category, title, price, description } = item;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(
      addItem({
        id,
        image,
        category,
        title,
        price,
        description,
        quantity: 1,
        totalPrice: price,
      }),
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <BackBtn route={-1} />

        <div className="grid md:grid-cols-2 gap-10 mt-6 bg-white rounded-2xl shadow-sm p-6">
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
            <img
              src={image}
              alt={title}
              className="max-h-[400px] object-contain hover:scale-105 transition"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase text-gray-400">
              {category || "Uncategorized"}
            </span>

            <h1 className="text-2xl font-bold mt-2">{title}</h1>

            <p className="text-gray-600 mt-4">{description}</p>

            <p className="text-2xl font-bold text-green-600 mt-6">
              C${price.toFixed(2)}
            </p>

            <div className="mt-6 flex items-center gap-4">
              {!isInCart ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              ) : (
                <>
                  <span className="text-green-600">
                    In Cart ({currentQuantity})
                  </span>
                  <DeleteItem id={id} />
                </>
              )}
            </div>

            <div className="mt-8 border-t pt-4 text-sm text-gray-500 space-y-1">
              <p>✔ Free shipping on orders over C$50</p>
              <p>✔ 30-day returns</p>
              <p>✔ Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  return await getProduct(params.id);
}

export default Item;
