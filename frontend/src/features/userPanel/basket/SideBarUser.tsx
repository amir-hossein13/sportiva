import { HiPencilSquare } from 'react-icons/hi2';
import QuickStats from '../../../ui/userPanel/QuickStats';
import { useState } from 'react';
import UserEditModal from '../../../ui/UserEditModal';
import { useUser } from '@/features/userPanel/user/useUser';
import SpinnerMini from '../../../ui/SpinnerMini';

function SideBarUser() {
  const [toggle, setToggle] = useState(false);
  const { isLoading, user } = useUser();

  if (isLoading) return <SpinnerMini />;
 

  const { username, email, phone, address, avatar } = user;

  return (
    <div className="grid w-full grid-cols-1 gap-5">
      <div className="col-span-1 flex flex-col rounded-md bg-white px-10 py-15">
        <div className="flex flex-col items-center justify-center">
          <div>
            <img
              className="border-lightBlue-200 w-32 rounded-full "
              src={avatar || '/img/amirlogo.png'}
              alt="user logo"
            />
          </div>
          <h2 className="text-darkBlue mt-6 text-2xl">نام کاربری</h2>
          <h3 className="text-aqua mt-3 text-xl">{username}</h3>
        </div>

        <button
          onClick={() => setToggle(true)}
          className="bg-aqua hover:bg-secondary/90 mt-5 flex w-full items-center justify-center rounded-md p-3 text-white"
        >
          ویرایش پروفایل
          <HiPencilSquare className="mr-2 h-4 w-4" />
        </button>
        <UserEditModal isOpen={toggle} onClose={() => setToggle(false)} />

        <div className="mt-4 flex flex-col gap-5 text-end">
          <h3 className="text-xl text-gray-600">{email}</h3>
          <h3 className="text-xl text-gray-600">{phone}</h3>
          <h3 className="text-xl text-gray-600">{address}</h3>
        </div>
      </div>
      <QuickStats />
    </div>
  );
}


export default SideBarUser;
