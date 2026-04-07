import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);
  return (
    <div className="bg-primary text-stone-200 flex justify-between items-center px-2 py-5">
      <div className="flex space-x-10 items-center">
        <div className="flex space-x-1 text-[17px] font-roboto">
          <span>{totalCartQuantity}</span>
          <span>Items</span>
        </div>
        <p className="text-[17px]">C${totalCartPrice.toFixed(2)}</p>
      </div>
      <Link to="/cart" className="text-[17px] font-roboto">
        Open Cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
