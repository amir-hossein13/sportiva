import { RouteObject } from "react-router-dom";
import Home from "../pages/site/Home";
import Product from "../pages/site/Product";
import Basket from "../pages/site/Basket";
import AdminPanel from "../pages/panel/AdminPanel";
import UserPanel from "../pages/panel/UserPanel";


 const siteRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },

  { path: "products", element: <Product /> },
  { path: "products/:id", element: <Product /> },

  { path: "basket", element: <Basket /> },

  { path: "admin", element: <AdminPanel /> },
  { path: "user", element: <UserPanel /> },


];
export default siteRoutes;