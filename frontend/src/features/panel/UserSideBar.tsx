import SideBarLogo from '../../ui/sidebar/SideBarLogo';
import SideIconNav from '../../ui/sidebar/SideIconNav';

function UserSideBar() {
  return (
    <div className="row-span-full flex flex-col gap-8 bg-gradient-to-b from-[#86B6F6] via-[#3A6EAD] to-[#000D5E] ">
      <SideBarLogo />
      <SideIconNav />
    </div>
  );
}

export default UserSideBar;
