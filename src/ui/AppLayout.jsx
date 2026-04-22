import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Navigation />
      <main className="overflow-scroll">
        <Toaster
          position="top-center"
          gutter={10}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: { background: "#f1f1f1", color: "#151515" },
          }}
        />
        <Outlet />
      </main>
      {cart.length > 0 && <CartOverview />}
    </div>
  );
}

export default AppLayout;
