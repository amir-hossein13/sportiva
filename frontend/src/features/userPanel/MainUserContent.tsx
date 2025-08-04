import { FaHeart, FaMessage, FaTelegram } from 'react-icons/fa6';
import CustomAreaChart from '../../ui/userPanel/CustomAreaChart';
import UserHeader from '../../ui/userPanel/UserHeader';
import UserNotif from '../../ui/userPanel/UserNotif';

function MainUserContent() {
  return (
    <section className="bg-[#D1E4FF] sm:h-dvh">
      <div className="container mx-auto space-y-11 p-5 sm:p-10">
        <UserHeader />
        <div>
          <h2 className="text-darkbule text-4xl font-bold">سلام امیرحسین</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-10">
          <div className="col-span-1 row-span-1 rounded-xl bg-white p-4  lg:col-span-4 lg:row-span-12">
            <h4 className="text-aqua text-lg font-semibold">آخرین سفارش شما</h4>
            <div className="flex items-center justify-between">
              <div>
                <img src="/public/img/Product1.png" alt="" />
              </div>
              <div>
                <h5 className="text-aqua text-xl">کفش ورزشی نایکی</h5>
                <p>کفش فوتسال سالنی مدل زرد ترکیبی از انعطاف، چسبندگی و طراحی اسپرت</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="font-farsi w-1/3 rounded-lg bg-[#F68686] px-6 py-2 text-center text-sm font-bold text-white">
                لغو ارسال
              </button>
              <button className="font-farsi w-2/3 rounded-lg bg-[rgba(23,107,135,0.5)] px-6 py-2 text-center text-sm font-bold text-white">
                درحال ارسال
              </button>
            </div>
          </div>

          <div className="col-span-1 row-span-1 rounded-xl bg-white p-4  lg:col-span-6 lg:row-span-12">
            <h4 className="text-aqua text-lg font-semibold">آخرین سفارش شما</h4>
            <div className="flex items-center justify-between">
              <div>
                <img src="/public/img/Product1.png" alt="" />
              </div>
              <div>
                <h5 className="text-aqua text-xl">کفش ورزشی نایکی</h5>
                <p>کفش فوتسال سالنی مدل زرد ترکیبی از انعطاف، چسبندگی و طراحی اسپرت</p>
              </div>
              <div>
                <h5 className="text-aqua text-xl">2عدد</h5>
                <h5 className="text-lg text-gray-500"> ۳.۴۵۰.۰۰۰ تومان</h5>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="font-farsi w-1/2 rounded-lg bg-[rgba(23,107,135,0.5)] px-6 py-2 text-center text-sm font-bold text-white">
                رفتن به سبد خرید
              </button>
              <button className="font-farsi w-1/2 rounded-lg bg-[rgba(23,107,135,0.5)] px-6 py-2 text-center text-sm font-bold text-white">
                مشاهده سفارش ها
              </button>
            </div>
          </div>
          <div className="col-span-1 flex h-full flex-col justify-between gap-4 lg:col-span-3">
            <UserNotif
              title="تعداد علاقه مندی"
              icon={<FaHeart className="text-aqua" />}
              count={12}
            />
            <UserNotif
              title="پیامهای خوانده نشده"
              icon={<FaMessage className="text-aqua" />}
              count={12}
            />
            <UserNotif
              title="عضویت در پیام رسان ها "
              icon={<FaTelegram className="text-aqua" />}
              count={12}
            />
          </div>

          <div className="col-span-1 row-span-1 rounded-xl bg-white p-4  lg:col-span-7 lg:row-span-10">
            <h4 className="text-aqua text-lg font-semibold">خرید های شما</h4>
            <CustomAreaChart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainUserContent;
