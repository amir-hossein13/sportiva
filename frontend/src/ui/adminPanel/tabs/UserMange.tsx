import { HiMiniPlus } from 'react-icons/hi2';
import ContorolBar from '../ContorolBar';
import UserProfileTable from '../UserProfileTable';

function UserMange() {

  return (
    <div className="mt-3">
      <div className="admin-cart-container bg-white">
        <div className="flex justify-between">
          <h2 className="text-darkBule text-4xl">مدیریت کاربرها</h2>
          <button className="admin-button-cart-mini bg-aqua text-white hover:bg-[#005b6a]">
            یوزر جدید
            <HiMiniPlus />
          </button>
        </div>
        <ContorolBar />
        <div className="mt-10">
          <UserProfileTable />
        </div>
      </div>
    </div>
  );
}

export default UserMange;
