import SideBarUser from '../../features/userPanel/basket/SideBarUser';
import TabContent from './TabContent';
import TabList from './TabList';

function UserContent() {
  return (
    <div className="userPanel-container main-content-container mt-10 max-w-7xl">
      <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
        <SideBarUser />
        <div className="flex flex-col">
          <TabList />
          <TabContent />
        </div>
      </div>
    </div>
  );
}

export default UserContent;
