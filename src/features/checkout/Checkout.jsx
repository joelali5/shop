import BackBtn from "../../ui/BackBtn";
import CheckoutSpinner from "../../ui/SpinnerMini";
import { useSelector, useDispatch } from "react-redux";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { clearCart } from "../cart/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user, isLoaded, isSignedIn } = useUser();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
  });

  if (!isLoaded) return <CheckoutSpinner />;

  const fullname = user?.fullName || "Guest User";
  const savedAddress = user?.publicMetadata?.address || "";
  const savedPhone = user?.phoneNumbers?.[0]?.phoneNumber || "";

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  function handleProceedToPayment() {
    if (!isSignedIn) {
      toast.error("Please log in to continue");
      navigate("/login");
      return;
    }

    setShowCheckout(true);
  }

  function handlePlaceOrder() {
    if (!formData.address || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      id: Date.now(),
      items: cart,
      total: totalPrice,
      address: formData.address,
      phone: formData.phone,
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    toast.success("Order placed successfully! 🎉");

    dispatch(clearCart());
    setShowCheckout(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-4">
          <BackBtn route={-1} />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>

              <p className="text-gray-700">{fullname}</p>
              <p className="text-gray-500">
                {savedAddress || "No address provided"}
              </p>
              <p className="text-gray-500">
                {savedPhone || "No phone number provided"}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Order Items</h2>

              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900">
                      C${item.totalPrice.toFixed(2)}
                    </p>

                    <div className="flex flex-col items-end gap-2">
                      <UpdateItemQuantity id={item.id} />
                      <DeleteItem id={item.id} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Total</span>
              <span>C${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handleProceedToPayment}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter address"
                defaultValue={savedAddress}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                className="border rounded-lg px-3 py-2"
              />

              <input
                type="text"
                placeholder="Enter phone number"
                defaultValue={savedPhone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                className="border rounded-lg px-3 py-2"
              />

              <button
                onClick={handlePlaceOrder}
                className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Place Order
              </button>

              <button
                onClick={() => setShowCheckout(false)}
                className="text-sm text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
