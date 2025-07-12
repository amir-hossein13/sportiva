function ProductItem() {
  return (
    <div className="flex w-[90%] max-w-[280px] flex-shrink-0 snap-center flex-col items-center justify-around rounded-3xl bg-[#eef5ff] p-4 sm:w-[260px]">
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex h-40 w-full items-center justify-center">
          <img src="/public/img/Product1.png" alt="محصول" className="h-full object-contain" />
        </div>
        <div className="flex w-full flex-col items-start justify-center text-right">
          <h4 className="font-farsi text-base font-extrabold sm:text-lg">کفش فوتسال نیوبالانس</h4>
          <p className="text-sm leading-6 text-[#00000080] sm:text-base">
            کفش فوتسال سالنی مدل زرد ترکیبی از انعطاف، چسبندگی و طراحی اسپرت
          </p>
          <div className="mt-4 flex w-full items-center justify-between">
            <button className="bg-liteBule-300 text-liteBule-100 rounded-xl px-6 py-1.5 text-sm sm:text-base">
              سفارش
            </button>
            <h4 className="text-sm font-bold sm:text-base">1,199,000 تومان</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
