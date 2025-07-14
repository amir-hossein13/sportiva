import Button from '../Button';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="my-6 grid items-center justify-center sm:container sm:mx-auto sm:w-full sm:grid-cols-10">
        <Link to="/" className="flex justify-start p-3 sm:col-span-2">
          <img className="" src="/public/img/Logo.png" alt="" />
        </Link>
        <div className="flex justify-center sm:col-span-6">
          <SearchBar />
        </div>
        <div className="flex justify-end sm:col-span-2">
          <Button>ورورد / ثبت نام</Button>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Header;
