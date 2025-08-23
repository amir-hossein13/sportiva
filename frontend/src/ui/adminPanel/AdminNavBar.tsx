import { HiOutlineBell, HiOutlineCog8Tooth } from 'react-icons/hi2';

function AdminNavBar() {
  return (
    <header className="bg-darkBule">
      <nav className="userPanel-container user-nav">
        <div className="flex flex-row items-center">
          <h2 className="text-4xl font-semibold md:text-3xl">پنل ادمین</h2>
        </div>
        <ul className="flex gap-5 items-center">
          <li className="li-hover">
            <HiOutlineCog8Tooth className="w-10 text-2xl" />
          </li>

          <li className="li-hover">
            <HiOutlineBell className="w-10 text-2xl" />
          </li>
          <div className="li-hover flex flex-row items-center justify-center gap-5">
            <h3 className="text-lg font-semibold text-white">admin</h3>
            <div className="w-10">
              <img className="w-full rounded-full" src="/img/amirlogo.png" alt="" />
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default AdminNavBar;
