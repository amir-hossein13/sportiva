import { HiChevronLeft, HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { useParams } from 'react-router-dom';
import { useProductById } from './useProduct';
import Spinner from '../../ui/Spinner';
import { formatCurrency } from '../../utils/helper';
import { useLikeStore } from '../../store/likeStore';
import { doLike } from '../../services/apiLikes';
import { useCounter } from '../../store/productCountStore';
import { useAuthStore } from '../../store/authStore';

function ProductInfo() {
  const params = useParams();
  const productId = Number(params.productId);
  const { isLoading, singleProduct } = useProductById(productId);
  const { liked, toggleLikes } = useLikeStore();
  const { count, inc, dec } = useCounter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  if (isLoading) return <Spinner />;
  const { name, price, discount, finaleprice, photo, description, color, categorys } =
    singleProduct;
  console.log(singleProduct);
  function handelLike() {
    toggleLikes(productId);
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
          <img src={photo} alt="" />
        </div>
        <div className="flex flex-col gap-5 sm:w-1/2">
          <h4 className="text-4xl font-bold whitespace-nowrap md:whitespace-break-spaces">
            {name}
          </h4>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="flex flex-col gap-5">
            <select
              className="w-full rounded-lg border border-gray-400 text-right text-gray-500"
              name=""
              id=""
              value="انتخاب سایز"
            >
              <option value="" className="text-gray-300" disabled selected hidden>
                انتخاب سایز
              </option>
            </select>
            <select
              className="w-full rounded-lg border border-gray-400 text-right text-gray-500"
              name=""
              id=""
            >
              <option value="" className="text-gray-300" disabled selected hidden>
                انتخاب رنگ
              </option>
            </select>
          </div>
          {discount ? (
            <span className="text-liteBule-100 w-10 rounded-lg bg-red-500 p-1">{discount}%</span>
          ) : (
            ''
          )}
          <div className="mt-3 flex justify-between">
            <h4 className="text-2xl whitespace-nowrap line-through">{formatCurrency(price)}</h4>
            <h4 className="text-2xl font-bold whitespace-nowrap text-red-500">
              {formatCurrency(finaleprice)}
            </h4>
            {isLoggedIn ? (
              <div onClick={handelLike}>
                {liked ? (
                  <HiHeart className="h-5 w-5 text-red-500" />
                ) : (
                  <HiOutlineHeart className="h-5 w-5" />
                )}
                {/* <HiOutlineHeart className="h-5 w-5" /> */}
              </div>
            ) : (
              <div>برای اضافه کردن به علاقه مندی ها اول ثبت نام کنید</div>
            )}
          </div>
          <div className="flex justify-between">
            <button className="text-liteBule-100 bg-liteBule-300 w-1/2 rounded-xl px-5 py-2">
              سفارش
            </button>
            <div className="flex w-fit items-center overflow-hidden rounded-xl border select-none rtl:flex-row-reverse">
              <button
                onClick={dec}
                className="flex h-10 w-10 items-center justify-center text-xl text-blue-900 transition hover:bg-blue-100"
              >
                –
              </button>
              <div className="flex h-10 w-10 items-center justify-center border-x text-xl text-blue-900">
                {count}
              </div>
              <button
                onClick={inc}
                className="flex h-10 w-10 items-center justify-center text-xl text-blue-900 transition hover:bg-blue-100"
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
