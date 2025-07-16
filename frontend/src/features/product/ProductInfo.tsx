import { HiChevronLeft, HiOutlineHeart } from 'react-icons/hi2';
import { useParams } from 'react-router-dom';
import { useProductById } from './useProduct';
import Spinner from '../../ui/Spinner';
import { formatCurrency } from '../../utils/helper';

function ProductInfo() {
  const params = useParams();
  const productId = Number(params.productId);
  const { isLoading, singleProduct } = useProductById(productId);
  if (isLoading) return <Spinner />;
  const { name, price, discount, finaleprice, photo, description, color, categorys } =
    singleProduct;
  console.log(singleProduct);
  return (
    <>
      <div className="flex gap-2">
        <h6>دسته بندی</h6>
        <HiChevronLeft />
        <h6>{categorys?.[0]?.name}</h6>
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
            <div>
              <HiOutlineHeart className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between">
            <button className="text-liteBule-100 bg-liteBule-300 w-1/2 rounded-xl px-5 py-2">
              سفارش
            </button>
            <div className="">counter</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
