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
    <div className="relative ml-0 flex h-full flex-col">
      <svg
        width="95"
        height="100%"
        viewBox="0 0 95 710"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M134 673.638C134 703.423 99.8924 720.323 76.1935 702.282L14.1935 655.081C5.25002 648.273 0 637.678 0 626.437V83.2658C0 72.0256 5.25009 61.4304 14.1936 54.6218L76.1936 7.42186C99.8925 -10.6199 134 6.28099 134 36.0659V673.638Z"
          fill="#86B6F6"
        />
      </svg>
      <div className="absolute top-0 left-[-1.5rem] flex h-full w-full flex-col justify-center gap-10 space-y-6 pt-4 pl-1 text-center">
        <HiOutlineViewGrid className="h-6 w-6 text-white" />
        <HiOutlineUser className="h-6 w-6 text-white" />
        <HiOutlineDocument className="h-6 w-6 text-white" />
        <HiOutlineShoppingCart className="h-6 w-6 text-white" />
        <HiOutlineShoppingBag className="h-6 w-6 text-white" />
        <HiOutlineHeart className="h-6 w-6 text-white" />
        <HiOutlineChat className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}

export default SideIconNav;
