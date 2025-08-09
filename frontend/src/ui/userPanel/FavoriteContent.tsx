import { HiOutlineHeart } from 'react-icons/hi2';
import LikedProduct from './LikedProduct';

function FavoriteContent() {
  return (
    <div className="mt-3 flex flex-col rounded-lg bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineHeart className="text-aqua h-5 w-5" />
        <h2 className="text-darkbule text-3xl font-semibold md:text-2xl">سبد خرید (9 آیتم)</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-2">
        <LikedProduct />
        <LikedProduct />
        <LikedProduct />
        <LikedProduct />
      </div>
    </div>
  );
}

export default FavoriteContent;
