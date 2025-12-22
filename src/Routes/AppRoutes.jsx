import { Layout } from "../Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import WishList from "../Component/WishList/WishList";
import Home from "../Component/Home/Home";
import Cart from "../Component/Cart/Cart";

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
