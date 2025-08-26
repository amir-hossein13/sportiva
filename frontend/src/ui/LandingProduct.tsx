import { HiChevronDown } from 'react-icons/hi2';
import ProductItem from './ProductItem';
import Title from './Title';
import { useProduct } from '../features/product/useProduct';
import SpinnerMini from './SpinnerMini';
import { useState } from 'react';

function LandingProduct() {
  const { isLoading, products = [] } = useProduct();
  const [visibleCount, setVisibleCount] = useState(8);

  if (isLoading) return <SpinnerMini />;
  return (
    <section className="fade-in container mx-auto my-10 flex flex-col items-center px-4 py-10">
      {/* Section Title */}
      <div className="mb-12 text-center">
        <Title>محصولات</Title>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <Title>کالایی موجود نمی باشد</Title>
      ) : (
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.slice(0, visibleCount).map((product) => (
            <ProductItem products={product} key={product.id} />
          ))}
        </div>
      )}

      {/* Show More Button */}
      {products.length > visibleCount && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 transition hover:bg-gray-300"
          >
            <HiChevronDown className="text-lg" />
            نمایش بیشتر
          </button>
        </div>
      )}
    </section>
  );
}

export default LandingProduct;
