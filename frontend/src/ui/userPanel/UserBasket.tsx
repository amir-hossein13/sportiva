import { HiOutlineShoppingCart } from 'react-icons/hi2';
import BasketItem from './BasketItem';
import { useBasket } from '@/features/userPanel/basket/hooks/useBaket';
import Spinner from '../Spinner';
import { formatCurrency } from '@/utils/helper';

function UserBasket() {
  const { isLoading, cartList } = useBasket();
  if (isLoading) return <Spinner />;

  const totalPrice = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-3 flex flex-col rounded-lg bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineShoppingCart className="text-aqua h-5 w-5" />
        <h2 className="text-darkBlue text-2xl font-semibold md:text-xl">
          سبد خرید ({cartList.length} آیتم)
        </h2>
      </div>

      {/* Basket Items */}
      <div className="max-h-[400px] flex-1 space-y-3 overflow-y-auto pr-2">
        {cartList.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Total Price */}
      <div className="flex justify-between">
        <h3 className="text-xl">جمع قیمت‌ها</h3>
        <h3 className="text-aqua text-xl font-extrabold">{formatCurrency(totalPrice)}</h3>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-between gap-5">
        <button className="bg-darkBlue hover:bg-darkBlue/90 w-full rounded-lg px-5 py-2 font-extrabold text-white">
          ادامه خرید
        </button>
        <button className="text-aqua border-aqua hover:bg-aqua/10 w-full rounded-lg border px-5 py-2 font-extrabold">
          تصفیه حساب
        </button>
      </div>
    </div>
  );
}


export default UserBasket;
