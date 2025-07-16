import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Home = lazy(() => import("../pages/site/Home"));
const Product = lazy(() => import("../pages/site/ProductDetail"));
const Basket = lazy(() => import("../pages/site/Basket"));


const siteRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },

  { path: "product", element: <Product /> },
  { path: "product/:productId", element: <Product /> },

  { path: "basket", element: <Basket /> },


];
export default siteRoutes;
