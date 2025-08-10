import { useProductById } from '@/features/product/useProduct';
import { HiMiniMinus, HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';
import SpinnerMini from '../SpinnerMini';
import { formatCurrency } from '@/utils/helper';
import { useDeleteBasketItem } from '@/features/userPanel/basket/useDeleteBasketItem';

interface CartData {
  id: number;
  product_id: number;
  user_id: number;
  price: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}

function BasketItem({ item }: { item: CartData }) {
  const { id, product_id, quantity } = item; // Renamed price to cartPrice
  const { isLoading, singleProduct, error } = useProductById(product_id);
  const { isDeleting, deleteItem } = useDeleteBasketItem();
  if (isLoading) return <SpinnerMini />;
  if (error || !singleProduct) {
    return (
      <div className="mx-auto flex max-w-3xl items-center justify-between rounded-lg border border-gray-500 p-4">
        <p className="text-red-500">خطا در بارگذاری محصول: {error?.message || 'محصول یافت نشد'}</p>
      </div>
    );
  }
  function handelDelete() {
    deleteItem(id);
  }

  const { name, price, discount, finaleprice, photo, color } = singleProduct;

  console.log(item);
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between rounded-lg border border-gray-500 p-4">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded bg-gray-400">
          {photo ? (
            <img src={photo} alt={name} className="h-full w-full rounded object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-500">
              بدون تصویر
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">
            {color ? `رنگ: ${color}` : 'رنگ: نامشخص'} · سایز: نامشخص
          </p>
          <div className="mt-1 flex items-center gap-2">
            {discount ? (
              <>
                <span className="text-liteBule-100 w-10 rounded-lg bg-red-500 p-1 text-sm">
                  {discount}%
                </span>
                <p className="text-lg font-semibold text-cyan-700">{formatCurrency(finaleprice)}</p>
                <p className="text-sm text-gray-500 line-through">{formatCurrency(price)}</p>
              </>
            ) : (
              <p className="text-lg font-semibold text-cyan-700">{formatCurrency(price)}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 text-blue-600">
            <HiMiniMinus className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-gray-700">{quantity}</span>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 text-blue-600">
            <HiMiniPlus className="h-4 w-4" />
          </button>
        </div>

        <button
          className="cursor-pointer text-red-500 hover:text-red-700"
          disabled={isDeleting}
          onClick={handelDelete}
        >
          <HiOutlineTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
