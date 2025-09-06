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
    <header className="sticky top-0 z-50 w-full bg-white/90 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center">
          <img src="/img/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden max-w-lg flex-1 px-4 sm:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <AuthUserIcons />
          ) : (
            <Link to="/login" className="hidden lg:block">
              <Button className=''>ورود / ثبت نام</Button>
            </Link>
          )}

          <button
            className="block p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiOutlineXMark size={30} /> : <HiBars3 size={30} />}
          </button>
        </div>
      </div>

      <div className="hidden border-t border-gray-100 bg-white lg:block">
        <div className="container mx-auto px-5 py-2">
          <NavBar />
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
    </header>
  );
}

export default Header;
