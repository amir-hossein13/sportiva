import {
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from 'react-icons/hi2';

function UserPNavbar() {
  return (
    <header className="bg-darkbule">
      <nav className="userPanel-container user-nav">
        <div className="flex flex-row items-center">
          <h2 className="text-4xl md:text-3xl">پنل کاربری</h2>
        </div>
        <ul className="flex gap-5">
          <li className="li-hover">
            <HiOutlineArrowRightStartOnRectangle className="w-10 text-2xl" />
          </li>

          <li className="li-hover">
            <HiOutlineBell className="w-10 text-2xl" />
          </li>
          <li className="li-hover">
            <HiOutlineShoppingCart className="w-10 text-2xl" />
          </li>
          <li className="li-hover">
            <HiOutlineHeart className="w-10 text-2xl" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default UserPNavbar;
