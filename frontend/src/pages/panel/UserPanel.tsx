import MainUserContent from '../../features/panel/MainUserContent';
import UserSideBar from '../../features/panel/UserSideBar';

function UserPanel() {
  return (
    <div className="grid max-h-screen grid-rows-[auto_1fr] sm:grid-cols-[26rem_1fr] md:grid-cols-[23rem_1fr] overflow-x-hidden overflow-y-scroll sm:overflow-hidden">
      <UserSideBar />
      <MainUserContent/>
    </div>
  );
}

export default UserPanel;
