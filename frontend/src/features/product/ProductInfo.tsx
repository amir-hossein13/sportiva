import { HiChevronLeft, HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { useParams } from 'react-router-dom';
import { useProductById } from './useProduct';
import { formatCurrency } from '@/utils/helper';
import { useLikeStore } from '@/store/likeStore';
import { useCounter } from '@/store/productCountStore';
import { useAuthStore } from '@/store/authStore';
import { useAddCart } from '../userPanel/basket/useAddCart';
import Spinner from '@/ui/Spinner';

function ProductInfo() {
  const params = useParams();
  const productId = Number(params.productId);
  const { isLoading, singleProduct } = useProductById(productId);
  const { liked, toggleLikes } = useLikeStore();
  const { count, inc, dec } = useCounter();
  const { addCart, isPending } = useAddCart();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (isLoading) return <Spinner />;

  const { name, price, discount, finaleprice, photo, description, color, categorys } =
    singleProduct;

  function handleLike() {
    toggleLikes(productId);
  }

  function handleAddToCart() {
    addCart({ id: productId, quantity: count });
  }

  return (
    <>
      <div className="flex gap-2">
        <h6>دسته بندی</h6>
        <HiChevronLeft />
        <h6>{categorys?.[0]?.name}</h6>
        <HiChevronLeft />
        <h6>{name}</h6>
      </div>
      <div className="flex flex-col flex-wrap items-center sm:flex-row sm:justify-between">
        <div className="mb-10 sm:w-1/2">
          <img src={photo} alt={name} />
        </div>
        <div className="flex flex-col gap-5 sm:w-1/2">
          <h4 className="text-4xl font-bold whitespace-nowrap md:whitespace-break-spaces">
            {name}
          </h4>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="flex flex-col gap-5">
            <select
              className="w-full rounded-lg border border-gray-400 text-right text-gray-500"
              name="size"
              id="size"
              defaultValue=""
            >
              <option value="" className="text-gray-300" disabled hidden>
                انتخاب سایز
              </option>
              {/* Add size options dynamically if available */}
            </select>
            <select
              className="w-full rounded-lg border border-gray-400 text-right text-gray-500"
              name="color"
              id="color"
              defaultValue=""
            >
              <option value="" className="text-gray-300" disabled hidden>
                انتخاب رنگ
              </option>
              <option value={color}>{color}</option>
            </select>
          </div>
          {discount ? (
            <span className="text-liteBule-100 w-10 rounded-lg bg-red-500 p-1">{discount}%</span>
          ) : null}
          <div className="mt-3 flex justify-between">
            <h4 className="text-2xl whitespace-nowrap line-through">{formatCurrency(price)}</h4>
            <h4 className="text-2xl font-bold whitespace-nowrap text-red-500">
              {formatCurrency(finaleprice)}
            </h4>
            {isLoggedIn ? (
              <button onClick={handleLike} aria-label="Toggle like">
                {liked ? (
                  <HiHeart className="h-5 w-5 text-red-500" />
                ) : (
                  <HiOutlineHeart className="h-5 w-5" />
                )}
              </button>
            ) : (
              <div>برای اضافه کردن به علاقه مندی ها اول ثبت نام کنید</div>
            )}
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleAddToCart}
              disabled={isPending}
              className="text-liteBule-100 bg-darkbule pointer-events-auto z-10 w-1/2 cursor-pointer rounded-xl px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? 'در حال افزودن...' : 'سفارش'}
            </button>
            <div className="flex w-fit items-center overflow-hidden rounded-xl border select-none rtl:flex-row-reverse">
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
    </>
  );
}

export default ProductInfo;
