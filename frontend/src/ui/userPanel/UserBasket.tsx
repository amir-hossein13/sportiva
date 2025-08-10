import { HiOutlineShoppingCart } from 'react-icons/hi2';
import BasketItem from './BasketItem';
import { useBasket } from '@/features/userPanel/basket/useBaket';
import Spinner from '../Spinner';


function UserBasket() {
  const { isLoading, cartList } = useBasket();
  console.log(cartList);
  if (isLoading) return <Spinner />;
  return (
    <div className="mt-3 flex flex-col rounded-lg bg-white p-5">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineShoppingCart className="text-aqua h-5 w-5" />
        <h2 className="text-darkbule text-3xl font-semibold md:text-2xl">سبد خرید (9 آیتم)</h2>
      </div>

      {/* Scrollable Basket Items */}
      <div className="flex-1 space-y-3 overflow-y-auto pr-2">
        {/* <BasketItem /> */}
        {cartList.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>
      <hr className="text-gray-400" />
      <div className="mt-4 flex justify-between">
        <h3 className="text-2xl">جمع فیمت ها</h3>
        <h3 className="text-aqua text-2xl font-extrabold">1,000,000 تومان</h3>
      </div>
      <div className="mt-4 flex justify-between gap-5">
        <button className="bg-darkbule w-full rounded-lg px-5 py-2 font-extrabold text-white">
          ادامه ی خرید
        </button>
        <button className="text-aqua border-aqua w-full rounded-lg border px-5 py-2 font-extrabold">
          تصفیه حساب
        </button>
      </div>
    </div>
  );
}

export default UserBasket;
