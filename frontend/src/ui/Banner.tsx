function Banner() {
  return (
    <section className="my-20 sm:container sm:mx-auto">
      <div className="relative flex h-[400px] w-full items-center justify-start rounded-4xl bg-gradient-to-r from-[#548FDD] to-[#86B6F6] sm:h-[500px] lg:h-[600px]">
        <div className="m-10 flex w-full max-w-md flex-col items-center space-y-8 text-center sm:max-w-lg sm:justify-start md:items-start md:px-7 md:text-start">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">سایت اسپورتیوا</h1>
          <p className="text-sm break-words whitespace-pre-wrap text-white sm:text-base">
            پلتفرمی نو در رابطه با خرید انواع لوازم اسپرت مارک می باشد. <br /> همچینین وارد کننده
            معتبرترین مارک های لوازم ورزشی در جهان <br /> و ایران می باشد.
          </p>
        </div>
        <div className="hidden md:absolute md:top-[-150px] md:left-[-12rem] md:block md:w-10/12 lg:top-[-170px] lg:w-2/3 xl:top-[-14rem] xl:w-2/3">
          <img
            className="h-auto w-full object-cover"
            src="/public/img/yellowHodi.png"
            alt="Hoodie"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
