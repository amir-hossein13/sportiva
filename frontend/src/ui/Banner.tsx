function Banner() {
  return (
    <section className="sm:container sm:mx-auto my-20 fade-in">
      <div className="banner-gradeint relative flex h-[400px] w-full items-center justify-start rounded-4xl sm:h-[500px] lg:h-[600px]">
        <div className="m-10 flex w-full max-w-md flex-col items-center space-y-8 text-center sm:max-w-lg sm:justify-start md:items-start md:px-7 md:text-start">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">سایت اسپورتیوا</h1>
          <p className="text-sm leading-relaxed text-white sm:text-base">
            پلتفرمی نو در رابطه با خرید انواع لوازم اسپرت مارک می باشد. همچینین وارد کننده معتبرترین
            مارک های لوازم ورزشی در جهان و ایران می باشد.
          </p>
        </div>
        <div className="hidden md:absolute md:top-1/2 md:left-[-12rem] md:block md:w-10/12 md:-translate-y-1/2 lg:w-2/3 xl:w-2/3">
          <img className="h-auto w-full object-cover" src="/img/yellowHodi.png" alt="Hoodie" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
