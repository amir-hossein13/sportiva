import { Link } from 'react-router-dom';
import { ProductData } from '../types/Product';
import { formatCurrency } from '../utils/helper';

interface Props {
  products?: ProductData;
}

function ProductItem({ products }: Props) {
  if (!products) return <div className="text-center text-gray-500">کالایی پیدا نشد</div>;

  const { id, name, price, discount, finaleprice, photo, description } = products;

  return (
    <div className="relative flex w-full max-w-[280px] flex-col items-center rounded-3xl bg-[#eef5ff] p-4 transition hover:shadow-lg">
      {/* Discount Badge */}
      {discount && discount > 0 && (
        <span className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white shadow">
          {discount}% تخفیف
        </span>
      )}

      {/* Image */}
      <Link to={`/product/${id}`} className="flex h-40 w-full items-center justify-center">
        <img
          src={photo || '/img/placeholder.png'}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = '/img/placeholder.png';
          }}
          className="h-auto w-full max-w-md rounded-lg object-contain"
        />
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex w-full flex-col items-start text-right">
        <h4 className="font-farsi text-base font-extrabold sm:text-lg">{name}</h4>
        <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#00000080] sm:text-base">
          {description}
        </p>

        {/* Price Section */}
        <div className="mt-4 flex w-full flex-col items-end">
          {discount && discount > 0 && (
            <h4 className="mb-1 text-sm font-bold text-gray-500 line-through">
              {formatCurrency(price)}
            </h4>
          )}
          <h4 className="mb-3 text-sm font-bold text-red-600 sm:text-base">
            {formatCurrency(finaleprice)}
          </h4>

          {/* Order Button */}
          <Link
            to={`/product/${id}`}
            className="bg-darkBule block w-full rounded-xl px-4 py-2 text-center text-sm text-white transition-colors duration-200 hover:bg-blue-700"
          >
            سفارش
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
