import { HiBars3, HiOutlinePhoneArrowUpRight, HiQrCode } from 'react-icons/hi2';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex items-center justify-center space-x-8">
      <Link className="cursor-pointer" to="/categories">
        <NavItem icon={<HiBars3 />}>دسته بندی</NavItem>
      </Link>
      <NavItem icon={<HiQrCode />}>راهنمای خرید</NavItem>
      <NavItem icon={<HiOutlinePhoneArrowUpRight />}>تماس با ما</NavItem>
    </div>
  );
}

export default NavBar;
