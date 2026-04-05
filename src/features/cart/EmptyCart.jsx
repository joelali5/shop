import BackBtn from "../../ui/BackBtn";

function EmptyCart() {
  return (
    <div>
      <BackBtn route={-1} />
      <p className="font-roboto text-lg sm:w-3/5 sm:mx-auto font-bold">
        Your cart is empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;
