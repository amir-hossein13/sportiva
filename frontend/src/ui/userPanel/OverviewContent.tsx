import { useBasket } from '@/features/userPanel/basket/hooks/useBaket';
import { HiOutlineBell, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi2';
import MiniCart from './MiniCart';
import SpinnerMini from '../SpinnerMini';
import SuggestedProduct from './SuggestedProduct';

function OverviewContent() {
  const { isLoading, cartList } = useBasket();
  if (isLoading) return <SpinnerMini />;
  return (
    <div className="mt-3 grid gap-5 md:grid-cols-9">
      <MiniCart
        title="کالاهای سبد خرید"
        count={cartList.length}
        icon={<HiOutlineShoppingCart className="text-aqua h-5 w-5" />}
      />
      <MiniCart
        title="تعداد علاقه‌مندی‌ها"
        count={5}
        icon={<HiOutlineHeart className="text-aqua h-5 w-5" />}
      />
      <MiniCart
        title="تیکت‌های خوانده نشده"
        count={2}
        icon={<HiOutlineBell className="text-aqua h-5 w-5" />}
      />

      <SuggestedProduct />
    </div>
  );
}

export default OverviewContent;
