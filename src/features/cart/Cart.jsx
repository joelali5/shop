import { Link } from "react-router-dom";
import BackBtn from "../../ui/BackBtn";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-4">
          <BackBtn route={-1} />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <ul className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>

          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>C${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-4">
              <span>Total</span>
              <span>C${totalPrice.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full text-center bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Checkout
            </Link>

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-3 w-full text-sm text-gray-500 hover:text-red-500 transition"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
