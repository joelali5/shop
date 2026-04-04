import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import Item, { loader as itemLoader } from "./features/products/Item";
import Electronics, {
  loader as electronicsLoader,
} from "./features/products/Electronics";
import Shoes, { loader as shoesLoader } from "./features/products/Shoes";
import Clothes, { loader as clothesLoader } from "./features/products/Clothes";
import Furniture, {
  loader as furnitureLoader,
} from "./features/products/Furniture";
import Miscellaneous, {
  loader as miscellaneousLoader,
} from "./features/products/Miscellaneous";
import Cart from "./features/cart/Cart";
import SignUp from "./features/authentication/SignUp";
import Login from "./features/authentication/Login";
import Checkout from "./features/checkout/Checkout";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "/products/:id",
          element: <Item />,
          loader: itemLoader,
        },
        {
          path: "/electronics",
          element: <Electronics />,
          loader: electronicsLoader,
        },
        {
          path: "/clothes",
          element: <Clothes />,
          loader: clothesLoader,
        },
        {
          path: "/furniture",
          element: <Furniture />,
          loader: furnitureLoader,
        },
        {
          path: "/shoes",
          element: <Shoes />,
          loader: shoesLoader,
        },
        {
          path: "/miscellaneous",
          element: <Miscellaneous />,
          loader: miscellaneousLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
