import { useProductById } from '@/features/product/useProduct';
import { HiMiniMinus, HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';
import SpinnerMini from '../SpinnerMini';
import { formatCurrency } from '@/utils/helper';
import { useDeleteBasketItem } from '@/features/userPanel/basket/hooks/useDeleteBasketItem';
import { useUpdateQuntity } from '@/features/userPanel/basket/hooks/useUpdateQuntity';

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
  const { id, product_id, quantity } = item;
  const { isLoading, singleProduct, error } = useProductById(product_id);
  const { isDeleting, deleteItem } = useDeleteBasketItem();
  const { updateQuntity, isPending } = useUpdateQuntity();

  if (isLoading) return <SpinnerMini />;

  if (error || !singleProduct) {
    return (
      <div className="flex w-full items-center justify-between rounded-lg border border-red-400 bg-red-50 p-4">
        <p className="text-red-500">خطا در بارگذاری محصول: {error?.message || 'محصول یافت نشد'}</p>
      </div>
    );
  }

  const { name, price, discount, finaleprice, photo, color } = singleProduct;

  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded bg-gray-200">
          {photo ? (
            <img src={photo} alt={name} className="h-full w-full object-cover" />
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
                <span className="rounded bg-red-500 px-2 py-0.5 text-sm text-white">
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

      {/* Actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            disabled={isPending || quantity <= 1}
            onClick={() => updateQuntity({ id, quantity: quantity - 1 })}
            className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 text-blue-600 disabled:opacity-50"
          >
            <HiMiniMinus className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-gray-700">{quantity}</span>
          <button
            disabled={isPending || quantity >= 4}
            onClick={() => updateQuntity({ id, quantity: quantity + 1 })}
            className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 text-blue-600 disabled:opacity-50"
          >
            <HiMiniPlus className="h-4 w-4" />
          </button>
        </div>

        <button
          className="text-red-500 hover:text-red-700 disabled:opacity-50"
          disabled={isDeleting}
          onClick={() => deleteItem(id)}
        >
          <HiOutlineTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
