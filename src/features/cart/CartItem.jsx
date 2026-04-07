import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { id, title, category, quantity, description, image, totalPrice } =
    item;
  return (
    <li className="mb-5 border-b-2 pb-3">
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-2xl">{quantity}</span>
        <span>X</span>
        <div className="flex items-center space-x-2 sm:space-x-12">
          <div className="w-[50px]">
            <img
              className="w-full object-cover"
              src={image}
              alt="product img"
            />
          </div>
          <p className="text-stone-800 font-roboto">{title}</p>
        </div>
        <h2 className="text-stone-900 font-bold">C${totalPrice.toFixed(2)}</h2>
      </div>
      <div>
        <p className="uppercase text-stone-500 font-roboto font-semibold">
          {category}
        </p>
        <p className="text-sm font-serif tracking-wider text-stone-700 mb-4">
          {description}
        </p>
        <div className="flex justify-between">
          <DeleteItem id={id} />
          <UpdateItemQuantity id={id} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
