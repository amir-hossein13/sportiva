import { useProduct } from '@/features/product/useProduct';
import SpinnerMini from '../SpinnerMini';
import DropdownMenu from './DropdownMenu';

function ProductTable() {
  const { isLoading, products } = useProduct();
  // console.log(products);
  if (isLoading) return <SpinnerMini />;

  return (
    <div dir="rtl" className="rounded-lg bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-xs text-gray-600 uppercase">
          <tr>
            <th className="px-6 py-3 text-right">محصول</th>
            <th className="px-6 py-3 text-right">دسته‌بندی</th>
            <th className="px-6 py-3 text-right">قیمت</th>
            <th className="px-6 py-3 text-right">موجودی</th>
            <th className="px-6 py-3 text-right">وضعیت</th>
            <th className="px-6 py-3 text-right">تاریخ افزودن</th>
            <th className="px-6 py-3 text-right">عملیات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="flex items-center gap-3 px-6 py-4">
                <img
                  src={product.photo}
                  alt={product.name}
                  className="h-10 w-10 rounded-md object-cover"
                />
                <span className="font-semibold text-gray-900">{product.name}</span>
              </td>
              <td className="px-6 py-4">
                <span className={`rounded-full px-3 py-1 text-xs font-medium`}>
                  {
                    //@ts-expect-error error for the text
                    product.category
                  }
                </span>
              </td>
              <td className="px-6 py-4 font-semibold text-green-700">{product.price}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="flex px-6 py-4 text-center">
                <span
                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white ${product.quantity === 0 ? 'bg-red-400' : 'bg-green-300'}`}
                >
                  {product.quantity === 0 ? 'نامجود' : 'موجود'}
                </span>
              </td>
              <td className="px-6 py-4">2025/10/10</td>
              <td className="relative px-6 py-4 text-right">
                <DropdownMenu product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
