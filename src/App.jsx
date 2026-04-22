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
import Women, { loader as womensLoader } from "./features/products/Women";
import Jewellery, {
  loader as jewelleryLoader,
} from "./features/products/Jewellery";
import Men, { loader as mensLoader } from "./features/products/Mens";

import Cart from "./features/cart/Cart";
import Signup from "./features/authentication/SignUp";
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
          path: "/men",
          element: <Men />,
          loader: mensLoader,
        },
        {
          path: "/jewellery",
          element: <Jewellery />,
          loader: jewelleryLoader,
        },
        {
          path: "/women",
          element: <Women />,
          loader: womensLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/signup/*",
          element: <Signup />,
        },
        {
          path: "/login/*",
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
