import { HiChevronLeft, HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { useParams } from 'react-router-dom';
import { useProductById } from './useProduct';
import { formatCurrency } from '@/utils/helper';
import { useLikeStore } from '@/store/likeStore';
import { useCounter } from '@/store/productCountStore';
import { useAddCart } from '../userPanel/basket/hooks/useAddCart';
import Spinner from '@/ui/Spinner';
import { useState } from 'react';
import { useUser } from '../userPanel/user/useUser';

function ProductInfo() {
  const params = useParams();
  const productId = Number(params.productId);
  const { isLoading, singleProduct } = useProductById(productId);
  const { liked, toggleLikes } = useLikeStore();
  const { count, inc, dec } = useCounter();
  const { addCart, isPending } = useAddCart();
  const [noMore, setIsNoMore] = useState(false);
  const isAuthenticated = useUser();

  if (isLoading) return <Spinner />;
  //@ts-expect-error idk
  const { name, price, discount, finaleprice, photo, description, color, categorys } =
    singleProduct;

  function handleLike() {
    toggleLikes(productId);
  }

  function handleAddToCart() {
    addCart({ id: productId, quantity: count });
    setIsNoMore(true);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        <h6>دسته بندی</h6>
        <HiChevronLeft className="inline" />
        <h6>{categorys?.[0]?.name}</h6>
        <HiChevronLeft className="inline" />
        <h6 className="max-w-xs truncate">{name}</h6>
      </div>

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between">
        <div className="flex w-full justify-center sm:w-1/2">
          <img
            src={photo}
            alt={name}
            className="h-auto w-full max-w-md rounded-lg object-contain"
          />
        </div>

        <div className="flex w-full flex-col gap-5 sm:w-1/2">
          <h4 className="line-clamp-2 text-3xl font-bold break-words md:text-4xl">{name}</h4>
          <p className="line-clamp-4 text-sm text-gray-500">{description}</p>

          <div className="flex flex-col gap-3">
            <select
              className="w-full rounded-lg border border-gray-400 p-2 text-right text-gray-500"
              name="color"
              id="color"
              defaultValue=""
            >
              <option value="" className="text-gray-300" disabled hidden>
                انتخاب رنگ
              </option>
              {color && <option value={color}>{color}</option>}
            </select>
          </div>

          <div className="flex items-center gap-3">
            {discount && (
              <span className="rounded-lg bg-red-500 px-2 py-1 text-sm text-white">
                {discount}%
              </span>
            )}
            <h4 className="text-2xl text-gray-400 line-through">{formatCurrency(price)}</h4>
            <h4 className="text-2xl font-bold text-red-500">{formatCurrency(finaleprice)}</h4>

            {isAuthenticated ? (
              <button onClick={handleLike} aria-label="Toggle like" className="ml-auto">
                {liked ? (
                  <HiHeart className="h-6 w-6 text-red-500" />
                ) : (
                  <HiOutlineHeart className="h-6 w-6 text-gray-500" />
                )}
              </button>
            ) : (
              <div className="ml-auto text-xs text-gray-500">
                برای اضافه کردن به علاقه‌مندی‌ها ابتدا ثبت نام کنید
              </div>
            )}
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={handleAddToCart}
              disabled={isPending || noMore}
              className="bg-darkBule w-full rounded-xl px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-1/2"
            >
              {isPending ? 'در حال افزودن...' : noMore ? 'موجود در سبد خرید' : 'سفارش'}
            </button>

            <div className="flex items-center overflow-hidden rounded-xl border select-none rtl:flex-row-reverse">
              <button
                onClick={dec}
                disabled={isPending}
                className="flex h-10 w-10 items-center justify-center text-xl text-blue-900 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                –
              </button>
              <div className="flex h-10 w-10 items-center justify-center border-x text-xl text-blue-900">
                {count}
              </div>
              <button
                onClick={inc}
                disabled={isPending}
                className="flex h-10 w-10 items-center justify-center text-xl text-blue-900 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
