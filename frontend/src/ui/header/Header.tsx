import Button from '../Button';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import AuthUserIcons from '../AuthUserIcons';
import { useAuthStore } from '../../store/authStore';

function Header() {
  // const user = getToken();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <div className="my-6 grid items-center justify-center sm:container sm:mx-auto sm:w-full sm:grid-cols-10">
        <Link to="/" className="flex justify-start p-3 sm:col-span-2">
          <img className="" src="/public/img/Logo.png" alt="" />
        </Link>
        <div className="flex justify-center sm:col-span-6">
          <SearchBar />
        </div>
        {isLoggedIn ? (
          <div className="flex justify-end sm:col-span-2">
            <AuthUserIcons />
          </div>
        ) : (
          <div className="flex justify-end sm:col-span-2">
            <Link to="/login">
              <Button>ورود / ثبت نام</Button>
            </Link>
          </div>
        )}
      </div>
      <NavBar />
    </>
  );
}

export default Header;
