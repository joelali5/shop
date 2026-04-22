import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white shadow-xl rounded-full px-6 py-3 flex items-center justify-between border">
      
      <div className="flex items-center gap-6 text-sm text-gray-700">
        <span className="font-medium">
          {totalCartQuantity} item{totalCartQuantity > 1 ? "s" : ""}
        </span>
        <span className="font-semibold text-black">
          C${totalCartPrice.toFixed(2)}
        </span>
      </div>

      <Link
        to="/cart"
        className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
      >
        View Cart →
      </Link>
    </div>
  );
}

export default CartOverview;
