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

  return (
    <>
      <BackBtn route={-1} />
      <ul className="list-none px-4 py-3 sm:w-3/5 sm:mx-auto sm:px-0">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="sm:w-3/5 mx-3 mb-3 sm:mx-auto flex justify-end space-x-3">
        <button
          className="border-[1px] border-stone-100 bg-stone-400 px-4 text-stone-100 rounded-md"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
        <Link
          to="/checkout"
          className="px-3 sm:px-5 py-2 bg-green-400 rounded-md text-white font-roboto tracking-wide"
        >
          Checkout
        </Link>
      </div>
    </>
  );
}

export default Cart;
