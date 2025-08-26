import FooterMiniTitle from './FooterMiniTitle';
import FooterTitle from './FooterTitle';
import { FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="h-20 w-full rotate-180 md:h-28"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#176b87" // Set to your footer's bg-aqua color
          />
        </svg>
      </div>

      <footer className="bg-aqua relative h-auto">
        <div className="text-lightBlue-100 font-farsi flex flex-col justify-around p-4 font-bold md:flex-row md:space-y-0 md:p-10">
          <div className="flex flex-col justify-start gap-y-5 text-center md:text-left">
            <FooterTitle>راهنمای خرید</FooterTitle>
            <FooterMiniTitle>رویه ارسال سفارش</FooterMiniTitle>
            <FooterMiniTitle>شیوه های پرداخت</FooterMiniTitle>
          </div>

          <div className="flex flex-col justify-start gap-y-5 text-center md:text-left">
            <FooterTitle>خدمات مشتریان</FooterTitle>
            <FooterMiniTitle>رویه های بازگرداندن کالا</FooterMiniTitle>
            <FooterMiniTitle>شرایط استفاده</FooterMiniTitle>
            <FooterMiniTitle>حریم خصوصی</FooterMiniTitle>
            <FooterMiniTitle>ثبت شکایت</FooterMiniTitle>
          </div>

          <div className="flex flex-col justify-start gap-y-5 text-center md:text-left">
            <FooterTitle>درباره اسپورتیوا</FooterTitle>
            <FooterMiniTitle>تماس با اسپورتیوا</FooterMiniTitle>
            <FooterMiniTitle>درباره ی اسپورتیوا</FooterMiniTitle>
            <FooterMiniTitle>وبلاگ</FooterMiniTitle>
          </div>

          <div className="mt-5 flex flex-col gap-y-5 text-center md:text-left">
            <h4 className="mb-5">از تخفیف ها و جدیدترین های فروشگاه باخبر شوید:</h4>
            <div className="mx-auto flex w-full max-w-md items-center rounded-full bg-[#D9D9D980] p-1 md:mx-0">
              <input
                type="text"
                className="flex-1 rounded-full px-2 py-1 text-sm text-teal-  focus:outline-none md:px-4 md:py-2 md:text-base"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <button className="text-aqua h-fit w-full rounded-full bg-[#EEF5FF] px-2 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base">
                ارسال
              </button>
            </div>
            <div className="mt-5 flex justify-center space-x-2 text-xl md:text-2xl">
              <div className="border-liteBule-200 rounded-full border p-1 md:p-2">
                <FaLinkedin />
              </div>
              <div className="border-liteBule-200 rounded-full border p-1 md:p-2">
                <FaInstagram />
              </div>
              <div className="border-liteBule-200 rounded-full border p-1 md:p-2">
                <FaTelegram />
              </div>
            </div>
          </div>
        </div>

        <div className="text-liteBule-100 flex flex-col items-center justify-center space-y-2 py-4 text-center md:py-10">
          <img className="w-16 object-cover md:w-auto" src="/img/Line.png" alt="Divider line" />
          <p className="text-sm md:text-base">کلیه حقوق این سایت برای اسپورتیوا محفوظ است</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
