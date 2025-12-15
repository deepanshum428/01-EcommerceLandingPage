import { useContext, useEffect, useState } from "react";
import { Layout } from "../Layout";
import { getProducts } from "../data/product";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
