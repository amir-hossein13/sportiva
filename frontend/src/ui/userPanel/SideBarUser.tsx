import { HiPencilSquare } from 'react-icons/hi2';
import QuickStats from './QuickStats';

function SideBarUser() {
  return (
      <div className="grid md:w-1/3 grid-cols-1 gap-5 w-full">
        <div className="col-span-1 flex flex-col rounded-md bg-white px-10 py-15">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img
                className="border-lightBlue-200 w-32 rounded-full border" // corrected class name
                src="/img/amirlogo.png"
                alt="user logo"
              />
            </div>
            <h2 className="text-darkBlue mt-6 text-2xl">نام کاربری</h2> {/* corrected class */}
            <h3 className="text-aqua mt-3 text-xl">user name</h3>
          </div>

          <button className="bg-aqua hover:bg-secondary/90 mt-5 flex w-full items-center justify-center rounded-md p-3 text-white">
            ویرایش پروفایل
            <HiPencilSquare className="mr-2 h-4 w-4" />
          </button>
          <div className="mt-4 flex flex-col gap-5 text-end">
            <h3 className="text-xl text-gray-600">user email</h3>
            <h3 className="text-xl text-gray-600">user number</h3>
            <h3 className="text-xl text-gray-600">user address</h3>
          </div>
        </div>
        <div>
          <QuickStats />
        </div>
      </div>
  );
}

export default SideBarUser;
