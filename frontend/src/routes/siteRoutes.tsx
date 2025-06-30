import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Basket from "../pages/Basket";
import AdminPanel from "../pages/AdminPanel";
import UserPanel from "../pages/UserPanel";
import Register from "../pages/Register";
import Login from "../pages/Login";

const siteRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },

  { path: "products", element: <Product /> },
  { path: "products/:id", element: <Product /> },

  { path: "basket", element: <Basket /> },

  { path: "admin", element: <AdminPanel /> },
  { path: "user", element: <UserPanel /> },

  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
];
