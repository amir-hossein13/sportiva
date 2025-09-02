import SideBarUser from '../../features/userPanel/basket/SideBarUser';
import TabContent from './TabContent';
import TabList from './TabList';

function UserContent() {
  return (
    <div className="userPanel-container main-content-container mt-6 max-w-7xl mx-auto">
      {/* موبایل: سایدبار بالای تب‌ها */}
      <div className=" gap-5 md:grid md:grid-cols-[250px_1fr]">
        <div className="order-1 md:order-none">
          <SideBarUser />
        </div>

        <div className="flex flex-col order-2 md:order-none">
          <TabList />
          <TabContent />
        </div>
      </div>
    </div>
  );
}

export default UserContent;
