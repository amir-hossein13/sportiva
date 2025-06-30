import { RouteObject } from "react-router-dom";
import AppLayout from "../pages/site/AppLayout";
import { siteRoutes } from "./siteRoutes";
import NotFound from "../pages/site/NotFound";

export const routes: RouteObject[] = [
  { path: "/", element: <AppLayout />, children: siteRoutes },
  { path: "/*", element: <NotFound /> },
];
