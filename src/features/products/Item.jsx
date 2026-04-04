import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import BackBtn from "../../ui/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

function Item() {
  const item = useLoaderData();
  const { id, images, category, title, price, description } = item;

  // Get the first image from the images array
  const image = images?.[0] || "https://placehold.co/600x400";
  const categoryName = category?.name || "Uncategorized";

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      id,
      image, // Use the processed image URL
      category: categoryName,
      title,
      price,
      description,
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <BackBtn route={-1} />
      <div className="bg-white shadow-xl rounded-lg flex flex-col mb-3 px-2 py-2 sm:mt-8 mx-5 sm:w-3/5 sm:flex-row sm:space-x-10 sm:items-center sm:mx-auto sm:px-5 sm:pb-6">
        <div className="w-full sm:w-2/5 mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="h-1/2 flex flex-col justify-end gap-3">
          <p className="text-sm uppercase text-stone-400">{categoryName}</p>
          <p className="font-roboto text-sm font-bold">{title}</p>
          <p className="font-serif text-xs sm:text-sm text-stone-600 sm:w-5/6">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-2 sm:w-5/6">
            <p className="font-bold text-lg sm:text-lg">£{price}</p>
            <div className="space-x-2 w-full sm:w-3/12">
              {isInCart && <DeleteItem id={id} />}
              {!isInCart && (
                <button
                  className="border-1 px-3 w-full sm:w-fit py-3 font-bold outline outline-1 outline-primary hover:bg-primary transition hover:ease-in-out duration-300 hover:text-white uppercase text-xs rounded-sm"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const item = await getProduct(params.id);
  return item;
}

export default Item;
