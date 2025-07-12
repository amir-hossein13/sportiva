import Button from '../Button';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';

function Header() {
  return (
    <>
      <div className="my-6 grid items-center sm:container sm:mx-auto sm:w-full sm:grid-cols-10">
        <div className="flex justify-start sm:col-span-2 p-3"><img className='' src="/public/img/Logo.png" alt="" /></div>

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
