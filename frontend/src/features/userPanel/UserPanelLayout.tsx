import { Outlet } from 'react-router-dom';
import UserSideBar from './UserSideBar';

function UserPanelLayout() {
  return (
    <div className="grid max-h-screen grid-rows-[auto_1fr] overflow-x-hidden overflow-y-scroll sm:grid-cols-[26rem_1fr] sm:overflow-hidden md:grid-cols-[23rem_1fr]">
      <UserSideBar />
      <Outlet />
    </div>
  );
}

export default UserPanelLayout;
