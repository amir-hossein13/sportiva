function Banner() {
  return (
    <section className="container mx-auto my-20">
      <div className="relative grid items-center gap-8 rounded-4xl bg-gradient-to-r from-[#176b87] to-[#0d4f63] p-10 sm:grid-cols-2">
        {/* بخش متن */}
        <div className="flex flex-col space-y-6 text-center sm:text-right">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">سایت اسپورتیوا</h1>
          <p className="text-sm leading-relaxed text-white sm:text-base">
            پلتفرمی نو در رابطه با خرید انواع لوازم اسپرت مارک می‌باشد. همچنین واردکننده معتبرترین
            مارک‌های لوازم ورزشی در جهان و ایران می‌باشد.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="text-liteBule-100 rounded-full bg-aqua px-6 py-2 font-bold shadow-lg transition hover:bg-darkBule hover:shadow-xl">
              همین حالا خرید کن
            </button>
          </div>
        </div>

        {/* بخش تصویر */}
        <div className="flex justify-center sm:justify-end">
          <img
            className="h-auto w-2/3 max-w-[600px] object-contain sm:w-full lg:max-w-[750px] xl:max-w-[900px]"
            src="/img/yellowHodi.png"
            alt="هودی اسپرت"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
