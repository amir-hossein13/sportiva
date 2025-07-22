// dependencies
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
//pages
const AppLayout = lazy(() => import("../pages/site/AppLayout"));
const NotFound = lazy(() => import("../pages/site/NotFound"));
const Register = lazy(() => import("../pages/site/Register"));
const Login = lazy(() => import("../pages/site/Login"));
const AdminPanel = lazy(() => import('../pages/panel/AdminPanel'));
const UserPanel = lazy(() => import('../pages/panel/UserPanel'));
//route
import siteRoutes from "./siteRoutes";

const routes: RouteObject[] = [
  { path: "/", element: <AppLayout />, children: siteRoutes },
  { path: "/*", element: <NotFound /> },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },

  { path: "admin", element: <AdminPanel /> },
  { path: "user", element: <UserPanel /> },
];
export default routes;
