import { RouteObject } from "react-router-dom";
import AppLayout from "../pages/site/AppLayout";
import  siteRoutes  from "./siteRoutes";
import NotFound from "../pages/site/NotFound";
import Register from "../pages/site/Register";
import Login from "../pages/site/Login";

const routes: RouteObject[] = [
  { path: "/", element: <AppLayout />, children: siteRoutes },
  { path: "/*", element: <NotFound /> },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
];
export default routes;
