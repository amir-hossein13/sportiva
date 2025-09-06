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

const ImageWithFallback = ({ src, alt }: { src?: string; alt: string }) => (
  <img
    src={src || '/img/placeholder.png'}
    alt={alt}
    onError={(e) => (e.currentTarget.src = '/img/placeholder.png')}
    className="h-64 w-full max-w-md rounded-lg object-contain sm:h-80 md:h-96"
  />
);

function ProductInfo() {
  const { productId } = useParams<{ productId: string }>();
  const id = Number(productId);
  const { isLoading, singleProduct } = useProductById(id);
  const { liked, toggleLikes } = useLikeStore();
  const { count, inc, dec } = useCounter();
  const { addCart, isPending } = useAddCart();
  const [noMore, setIsNoMore] = useState(false);
  const isAuthenticated = useUser();

  if (isLoading) return <Spinner />;

  if (!singleProduct) return <div className="text-center text-gray-500">محصولی یافت نشد</div>;
  //@ts-expect-error test
  const { name, price, discount, finaleprice, photo, description, color, categorys } =
    singleProduct;

  const handleLike = () => toggleLikes(id);

  const handleAddToCart = () => {
    addCart({ id, quantity: count });
    setIsNoMore(true);
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1 overflow-x-auto text-sm whitespace-nowrap text-gray-500">
        <span>دسته بندی</span>
        <HiChevronLeft className="inline" />
        <span>{categorys?.[0]?.name}</span>
        <HiChevronLeft className="inline" />
        <span className="max-w-xs truncate">{name}</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        {/* Image */}
        <div className="flex w-full justify-center sm:w-1/2">
          <ImageWithFallback src={photo} alt={name} />
        </div>

        {/* Product Details */}
        <div className="flex w-full flex-col gap-5 sm:w-1/2">
          <h1 className="line-clamp-2 text-2xl font-bold break-words sm:text-3xl md:text-4xl">
            {name}
          </h1>
          <p className="line-clamp-4 text-sm text-gray-500">{description}</p>

          {/* Color Selection */}
          {color && (
            <select className="w-full rounded-lg border border-gray-400 p-2 text-right text-gray-500">
              <option value="" disabled hidden>
                انتخاب رنگ
              </option>
              <option value={color}>{color}</option>
            </select>
          )}

          {/* Price & Like */}
          <div className="flex items-center gap-3">
            {discount && (
              <span className="rounded-lg bg-red-500 px-2 py-1 text-sm text-white">
                {discount}%
              </span>
            )}
            {discount && (
              <span className="text-xl text-gray-400 line-through sm:text-2xl">
                {formatCurrency(price)}
              </span>
            )}
            <span className="text-xl font-bold text-red-500 sm:text-2xl">
              {formatCurrency(finaleprice)}
            </span>

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

          {/* Add to Cart & Quantity */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
