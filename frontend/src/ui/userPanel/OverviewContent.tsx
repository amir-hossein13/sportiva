import MiniCart from './MiniCart';
import { HiOutlineBell, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi2';

function OverviewContent() {
  return (
    <div className="mt-3 grid grid-rows-5 gap-5 md:grid-cols-9">
      <MiniCart
        title="کالاهای سبدخرید"
        count={12}
        icon={<HiOutlineShoppingCart className="text-aqua w-5 h-5" />}
      />
      <MiniCart
        title="تعداد علاقه مندی ها"
        count={12}
        icon={<HiOutlineHeart className="text-aqua w-5 h-5" />}
      />
      <MiniCart
        title="تیکت های خوانده نشده"
        count={12}
        icon={<HiOutlineBell className="text-aqua w-5 h-5" />}
      />
      <div className="col-span-9 h-120 rounded-lg bg-white p-5">
        <h2 className="text-darkbule text-3xl font-semibold md:text-2xl">کالاهای پیشنهادی</h2>
      </div>
    </div>
  );
}

export default OverviewContent;
