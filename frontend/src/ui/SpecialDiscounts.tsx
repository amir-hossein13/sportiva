import { useProduct } from '../features/product/useProduct';
import ProductItem from './ProductItem';
import SpinnerMini from './SpinnerMini';

function SpecialDiscounts() {
  const {isLoading,products} = useProduct()
  const productsWithDiscount = products.filter(
    (product) => product.discount && product.discount > 0
  );
  if(isLoading) return <SpinnerMini/>
  // console.log(products);
  return (
    <section className="fade-in my-20 sm:container sm:mx-auto">
      <div className="discount-banner-gradeint flex flex-col gap-6 rounded-4xl p-6 sm:grid sm:h-[500px] sm:grid-cols-10 sm:p-12 lg:h-[600px] lg:p-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:col-span-4">
          <img src="/img/ticket-discount.png" alt="تخفیف" className="w-24 sm:w-32" />
          <h3 className="text-liteBule-100 text-3xl font-bold sm:text-5xl">تخفیف‌های ویژه</h3>
          <h3 className="text-liteBule-100 text-2xl font-bold sm:text-4xl">12:20:00</h3>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pr-1 sm:col-span-6 sm:pr-0">
          {productsWithDiscount ? (
            products?.map((product) => <ProductItem products={product} key={product.id} />)
          ) : (
            <div>منتظر تخفیف های ویژه باشید</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SpecialDiscounts;
