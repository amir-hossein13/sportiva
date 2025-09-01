import FooterMiniTitle from './FooterMiniTitle';
import FooterTitle from './FooterTitle';
import { FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      {/* موج بالای فوتر */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="h-20 w-full rotate-180 md:h-28"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#176b87"
          />
        </svg>
      </div>

      <footer className="bg-aqua relative">
        <div className="text-lightBlue-100 font-farsi container mx-auto grid gap-10 px-6 py-10 text-center font-bold md:grid-cols-4 md:text-right">
          {/* ستون ۱ */}
          <div className="space-y-3">
            <FooterTitle>راهنمای خرید</FooterTitle>
            <FooterMiniTitle>رویه ارسال سفارش</FooterMiniTitle>
            <FooterMiniTitle>شیوه‌های پرداخت</FooterMiniTitle>
          </div>

          {/* ستون ۲ */}
          <div className="space-y-3">
            <FooterTitle>خدمات مشتریان</FooterTitle>
            <FooterMiniTitle>رویه‌های بازگرداندن کالا</FooterMiniTitle>
            <FooterMiniTitle>شرایط استفاده</FooterMiniTitle>
            <FooterMiniTitle>حریم خصوصی</FooterMiniTitle>
            <FooterMiniTitle>ثبت شکایت</FooterMiniTitle>
          </div>

          {/* ستون ۳ */}
          <div className="space-y-3">
            <FooterTitle>درباره اسپورتیوا</FooterTitle>
            <FooterMiniTitle>تماس با اسپورتیوا</FooterMiniTitle>
            <FooterMiniTitle>درباره‌ی اسپورتیوا</FooterMiniTitle>
            <FooterMiniTitle>وبلاگ</FooterMiniTitle>
          </div>

          {/* ستون ۴: خبرنامه + شبکه‌های اجتماعی */}
          <div className="space-y-5">
            <h4 className="font-semibold">از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:</h4>
            <div className="mx-auto flex w-full max-w-md rounded-full bg-white shadow-md">
              <input
                type="email"
                className="flex-1 rounded-l-full px-4 py-2 text-sm text-gray-700 focus:outline-none md:text-base"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button className="bg-darkBule rounded-r-full px-6 py-2 text-sm font-bold text-white transition hover:bg-[#0d4f63] md:text-base">
                ارسال
              </button>
            </div>

            {/* آیکون‌های شبکه اجتماعی */}
            <div className="mt-5 flex justify-center gap-3 text-xl md:text-2xl">
              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-sky-400 hover:text-white"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="bg-aqua border-t py-4 text-center text-sm text-white md:text-base">
          © کلیه حقوق این سایت برای اسپورتیوا محفوظ است
        </div>
      </footer>
    </>
  );
}

export default Footer;
