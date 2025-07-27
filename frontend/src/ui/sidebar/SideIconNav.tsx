import {
  HiOutlineViewGrid,
  HiOutlineUser,
  HiOutlineDocument,
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineChat,
} from 'react-icons/hi';

function SideIconNav() {
  return (
    <div className="relative sm:flex sm:h-screen hidden sm:items-center">
      <svg
        className="md:block hidden"
        width="85"
        height="85%"
        viewBox="0 0 95 710"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="panelGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7db9ff" />
            <stop offset="100%" stopColor="#30528f" />
          </linearGradient>
        </defs>

        <path
          d="M134 673.638C134 703.423 99.8924 720.323 76.1935 702.282L14.1935 655.081C5.25002 648.273 0 637.678 0 626.437V83.2658C0 72.0256 5.25009 61.4304 14.1936 54.6218L76.1936 7.42186C99.8925 -10.6199 134 6.28099 134 36.0659V673.638Z"
          fill="url(#panelGradient)"
        />
      </svg>

      <div className="absolute inset-0 flex space-x-15">
        <div className="flex w-16 flex-col items-center justify-center-safe space-y-6">
          <HiOutlineViewGrid className="h-6 w-6 text-white" />
          <HiOutlineUser className="h-6 w-6 text-white" />
          <HiOutlineDocument className="h-6 w-6 text-white" />
          <HiOutlineShoppingCart className="h-6 w-6 text-white" />
          <HiOutlineShoppingBag className="h-6 w-6 text-white" />
          <HiOutlineHeart className="h-6 w-6 text-white" />
          <HiOutlineChat className="h-6 w-6 text-white" />
        </div>

        <ul className="flex flex-1 flex-col justify-center space-y-6 pr-4">
          <li className="text-lg text-white">پیشخوان</li>
          <li className="text-white">مدیریت پروفایل کاربری</li>
          <li className="text-white">صفحه محصولات</li>
          <li className="text-white">سبد خرید</li>
          <li className="text-white">سفارش‌ها</li>
          <li className="text-white">لیست علاقه‌مندی‌ها</li>
          <li className="text-white">پیام‌ها و پشتیبانی</li>
        </ul>
      </div>
    </div>
  );
}

export default SideIconNav;
