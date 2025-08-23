import { HiMiniArrowDownTray, HiMiniPlus, HiOutlineUsers } from "react-icons/hi2"
import LatestActivity from "./LatestActivity"

function MainContent() {
    return (
        <>
        <div className="admin-cart-container">
          <h3 className="text-darkBule text-3xl font-extrabold">میانبرها</h3>
          <div className="mt-3 flex flex-col items-start justify-center gap-3">
            <button className="admin-button-cart bg-[#006b7d] text-white hover:bg-[#005b6a]">
              <HiMiniPlus />
              ایتم جدید
            </button>
            <button className="admin-button-cart bg-liteBule-300 text-black">
              <HiOutlineUsers />
              مدیریت کاربران
            </button>
            <button className="admin-button-cart border-aqua text-aqua border">
              <HiMiniArrowDownTray />
              خروجی اطلاعات
            </button>
          </div>
        </div>

        <div className="admin-cart-container">
          <h3 className="text-darkBule text-3xl font-extrabold">فعالیت های اخیر</h3>
          <div className="mt-3">
            <LatestActivity />
          </div>
        </div>
        </>
    )
}

export default MainContent
