import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="flex items-center border rounded-full overflow-hidden">
      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
      >
        −
      </button>

      <span className="px-4 text-sm font-medium text-gray-800">
        {currentQuantity}
      </span>

      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
