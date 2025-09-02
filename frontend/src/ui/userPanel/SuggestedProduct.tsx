import { useProduct } from '@/features/product/useProduct';
import { formatCurrency } from '@/utils/helper';
import { Link } from 'react-router-dom';

function SuggestedProduct() {
  const { isLoading, products } = useProduct();

  if (isLoading) return <div>Loading...</div>;
  if (!products || products.length === 0) return <div>هیچ کالایی یافت نشد</div>;

  // Pick 5 random products
  const randomProducts = [...products]
    .sort(() => Math.random() - 0.5) // shuffle
    .slice(0, 5); // get first 5

  return (
    <div className="sm:col-span-9 rounded-lg bg-white p-5">
      <h2 className="text-darkBlue mb-4 text-3xl font-semibold md:text-2xl">کالاهای پیشنهادی</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {randomProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.name} replace>
            <div
              key={product.id}
              className="flex flex-col rounded-lg border border-gray-200 p-4 shadow-sm transition hover:shadow-md"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="h-40 w-full rounded object-cover"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{product.name}</h3>
              <span className="font-bold text-cyan-700">{formatCurrency(product.price)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SuggestedProduct;
