import {
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from 'react-icons/hi2';

function UserPNavbar() {
  return (
    <header className="bg-darkBule text-white">
      <nav className="userPanel-container flex flex-wrap items-center justify-between p-4">
        <h2 className="text-2xl font-bold sm:text-3xl">پنل کاربری</h2>

        <ul className="mt-3 flex w-full justify-around gap-5 sm:mt-0 sm:w-auto sm:justify-end">
          <li className="li-hover">
            <HiOutlineArrowRightStartOnRectangle className="h-6 w-6 sm:h-7 sm:w-7" />
          </li>
          <li className="li-hover">
            <HiOutlineBell className="h-6 w-6 sm:h-7 sm:w-7" />
          </li>
          <li className="li-hover">
            <HiOutlineShoppingCart className="h-6 w-6 sm:h-7 sm:w-7" />
          </li>
          <li className="li-hover">
            <HiOutlineHeart className="h-6 w-6 sm:h-7 sm:w-7" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default UserPNavbar;
