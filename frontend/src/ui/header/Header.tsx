import { useState } from 'react';
import Button from '../Button';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import AuthUserIcons from '../AuthUserIcons';
import { useAuthStore } from '../../store/authStore';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center">
          <img src="/img/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden flex-grow px-4 sm:block md:w-2/5">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <AuthUserIcons />
          ) : (
            <Link to="/login" className="hidden lg:block">
              <Button className="">ورود / ثبت نام</Button>
            </Link>
          )}

          <button
            className="block p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiOutlineXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="space-y-4 bg-white px-5 py-4 shadow-md lg:hidden">
          <SearchBar />
          <NavBar />
          {!isLoggedIn && (
            <Link to="/login" className="block">
              <Button className="w-full">ورود / ثبت نام</Button>
            </Link>
          )}
        </div>
      )}

      <div className="hidden lg:block">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
