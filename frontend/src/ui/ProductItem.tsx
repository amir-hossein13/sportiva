import { ProductData } from '../types/Product';
import { formatCurrency } from '../utils/helper';

interface Props {
  products?: ProductData;
}

function ProductItem({ products }: Props) {
  if (!products) return <div>کالایی پیدا نشد </div>;
  const { name, price, discount, finaleprice, photo, description } = products;

  return (
    <div className="relative flex w-[90%] max-w-[280px] flex-shrink-0 snap-center flex-col items-center justify-around rounded-3xl bg-[#eef5ff] p-4 sm:w-[260px]">
      {discount && discount > 0 && (
        <span className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          {discount}% تخفیف
        </span>
      )}
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex h-40 w-full items-center justify-center">
          <img src={photo} alt="محصول" className="h-full object-contain" />
        </div>
        <div className="flex w-full flex-col items-start justify-center text-right">
          <h4 className="font-farsi text-base font-extrabold sm:text-lg">{name}</h4>
          <p className="text-sm leading-6 text-[#00000080] sm:text-base">{description}</p>
          <div className="mt-4 flex w-full flex-col items-end">
            {discount && discount > 0 && (
              <h4 className="mb-1 text-sm font-bold text-gray-500 line-through">
                {formatCurrency(price)}
              </h4>
            )}
            <h4 className="mb-2 text-sm font-bold text-red-600 sm:text-base">
              {formatCurrency(finaleprice)} تومان
            </h4>
            <button className="rounded-xl w-full bg-liteBule-300 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600">
              سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
