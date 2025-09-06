import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HeroSlider() {
  const slides = [
    {
      img: '/img/slider1.webp',
      title: 'جدیدترین محصولات ورزشی',
      desc: 'کالکشن جدید با تخفیف ویژه',
      btn: 'همین حالا خرید کن',
    },
    {
      img: '/img/slider2.webp',
      title: 'لباس ورزشی اورجینال',
      desc: 'کیفیت برتر با بهترین قیمت',
      btn: 'مشاهده محصولات',
    },
  ];

  return (
    <div className="hidden w-full lg:block">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[450px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex h-[450px] w-full items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="rounded-xl bg-black/40 p-6 text-center text-white">
                <h2 className="mb-2 text-3xl font-bold">{slide.title}</h2>
                <p className="mb-4">{slide.desc}</p>
                <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                  {slide.btn}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
