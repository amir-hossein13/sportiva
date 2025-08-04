import ExitUser from '../../ui/sidebar/ExitUser';
import SideBarLogo from '../../ui/sidebar/SideBarLogo';
import SideIconNav from '../../ui/sidebar/SideIconNav';

function UserSideBar() {
  return (
    <div className="user-sidebar-gradeint row-span-full flex flex-col gap-8">
      <SideBarLogo />
      <SideIconNav />
      <ExitUser/>   
    </div>
  );
}

export default UserSideBar;
