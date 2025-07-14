import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Home = lazy(() => import("../pages/site/Home"));
const Product = lazy(() => import("../pages/site/Product"));
const Basket = lazy(() => import("../pages/site/Basket"));
const AdminPanel = lazy(() => import("../pages/panel/AdminPanel"));
const UserPanel = lazy(() => import("../pages/panel/UserPanel"));

const siteRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },

  { path: "product", element: <Product /> },
  { path: "product/:id", element: <Product /> },

  { path: "basket", element: <Basket /> },

  { path: "admin", element: <AdminPanel /> },
  { path: "user", element: <UserPanel /> },
];
export default siteRoutes;
