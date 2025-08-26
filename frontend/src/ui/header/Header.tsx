import Button from '../Button';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import AuthUserIcons from '../AuthUserIcons';
import { useAuthStore } from '../../store/authStore';

function Header() {
  // const user = getToken();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between px-5 py-4 sm:flex-row">
        <Link to="/" className="mb-4 flex items-center sm:mb-0 sm:w-1/5">
          <img src="/img/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="flex-grow px-4 sm:w-3/5">
          <SearchBar />
        </div>

        <div className="flex items-center justify-center sm:w-1/5">
          {isLoggedIn ? (
            <AuthUserIcons />
          ) : (
            <Link to="/login">
              <Button>ورود / ثبت نام</Button>
            </Link>
          )}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
