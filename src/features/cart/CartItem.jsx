import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { id, title, category, quantity, description, image, totalPrice } =
    item;

  return (
    <li className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 items-start">
      <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-2">
        <img src={image} alt={title} className="max-h-full object-contain" />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 line-clamp-2">{title}</h3>
          <p className="font-bold text-gray-900 whitespace-nowrap">
            C${totalPrice.toFixed(2)}
          </p>
        </div>

        <p className="text-xs uppercase text-gray-400 mt-1">{category}</p>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Qty:</span>
            <UpdateItemQuantity id={id} />
          </div>
          <DeleteItem id={id} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
