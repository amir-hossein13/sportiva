import ProductItem from './ProductItem';

function SpecialDiscounts() {
  return (
    <section className="my-5 px-4 sm:container sm:mx-auto">
      <div className="flex flex-col gap-6 rounded-4xl bg-gradient-to-br from-white via-[#B3CED8] to-[#166B87] p-6 sm:grid sm:h-[500px] sm:grid-cols-10 sm:p-12 lg:h-[600px] lg:p-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:col-span-4">
          <img src="/public/img/ticket-discount.png" alt="تخفیف" className="w-24 sm:w-32" />
          <h3 className="text-liteBule-100 text-3xl font-bold sm:text-5xl">تخفیف‌های ویژه</h3>
          <h3 className="text-liteBule-100 text-2xl font-bold sm:text-4xl">12:20:00</h3>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pr-1 sm:col-span-6 sm:pr-0">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
}

export default SpecialDiscounts;
