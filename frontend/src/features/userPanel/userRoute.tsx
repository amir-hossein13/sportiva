import { Navigate, RouteObject } from 'react-router-dom';
import UserPanelLayout from './UserPanelLayout';
import MainUserContent from './MainUserContent';
import UserManegeAcc from '../../pages/panel-user/UserManegeAcc';
import UserProduct from '../../pages/panel-user/UserProduct';
import UserBasket from '../../pages/panel-user/UserBasket';
import UserOrder from '../../pages/panel-user/UserOrder';
import UserFavorite from '../../pages/panel-user/UserFavorite';
import UserSupport from '../../pages/panel-user/UserSupport';

export const userRoute: RouteObject[] = [
  {
    path: '/user',
    element: <UserPanelLayout />,
    children: [
      { index: true, element: <Navigate to="/user/main" /> }, // <-- default route
      { path: 'main', element: <MainUserContent /> },
      { path: 'manege', element: <UserManegeAcc /> },
      { path: 'products', element: <UserProduct /> },
      { path: 'basket', element: <UserBasket /> },
      { path: 'orders', element: <UserOrder /> },
      { path: 'favorite', element: <UserFavorite /> },
      { path: 'support', element: <UserSupport /> },
    ],
  },
];
