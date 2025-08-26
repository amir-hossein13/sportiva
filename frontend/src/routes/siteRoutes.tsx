import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const Category = lazy(() => import('@/pages/site/Category'));
const BrowseCategories = lazy(() => import('@/pages/site/BrowseCategories'));
const Home = lazy(() => import('@/pages/site/Home'));
const Product = lazy(() => import('@/pages/site/ProductDetail'));
const Basket = lazy(() => import('@/pages/site/Basket'));

const siteRoutes: RouteObject[] = [
  { path: '/', element: <Home /> },

  { path: 'product', element: <Product /> },
  { path: 'product/:productId', element: <Product /> },

  { path: 'categories', element: <BrowseCategories /> },

  { path: 'category', element: <Category /> },
  { path: 'category/:categoryId', element: <Category /> },

  { path: 'basket', element: <Basket /> },
];
export default siteRoutes;
