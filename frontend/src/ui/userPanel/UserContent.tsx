import SideBarUser from '../../features/userPanel/basket/SideBarUser';
import TabContent from './TabContent';
import TabList from './TabList';

function UserContent() {
  return (
    <div className="userPanel-container main-content-container mt-10 max-w-7xl">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <SideBarUser />
        <div className="flex w-full flex-col md:w-2/3">
          <TabList />
          <TabContent />
        </div>
      </div>
    </div>
  );
}

export default UserContent;
