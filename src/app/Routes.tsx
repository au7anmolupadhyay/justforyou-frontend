import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Wishlist from "@/pages/Wishlist";
import Cart from "@/pages/Cart";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "products/:category", element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
    ],
  },
]);
